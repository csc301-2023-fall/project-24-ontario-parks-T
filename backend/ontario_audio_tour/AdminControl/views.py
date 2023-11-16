import os
import qrcode
from django.shortcuts import render, redirect, get_object_or_404
from django.http import Http404, HttpResponseBadRequest
from AdminControl.models import Audio, Location
from django.contrib.auth import login
from django.shortcuts import redirect, render
from django.urls import reverse
from AdminControl.forms import CustomUserCreationForm
from django.db import IntegrityError
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib import messages
from django.views import View
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from .serializers import *
from rest_framework.permissions import IsAuthenticated

# Create your views here.

@login_required
def upload_audio(request):
    code = 200
    context_dict = {
        'notification': ''
    }
    if request.method == 'POST':
        uploaded_audio = request.FILES["audiofile"]
        audio_name = request.POST['audioname']
        try:
            audio = Audio.objects.create(name=audio_name, audio=uploaded_audio)
        except IntegrityError:
            context_dict['notification'] = 'Duplicated audio name'
            return render(request, "audio_upload.html", context_dict, status=code)
        return redirect(reverse("AdminControl:editaudio", kwargs={'audio_name':audio.name}))
    return render(request, "audio_upload.html", context_dict, status=code)

@login_required
def edit_audio(request, audio_name):
    code = 200
    context_dict = {
        'notification': '',
        'audio_url': '',
        'audio_name': audio_name
    }
    audio = get_object_or_404(Audio, name=audio_name)
    context_dict['audio_url'] = audio.audio.url
    print(f"{audio.name} retrieved")
    if request.method == 'POST':
        uploaded_audio = request.FILES["audiofile"]
        audio.audio.delete()
        audio.audio = uploaded_audio
        audio.save()
        context_dict['audio_url'] = audio.audio.url
        print(f"{audio.name} updated")
    return render(request, "audio_edit.html", context_dict, status=code)

@login_required
def manage_audio(request):
    code = 200
    context_dict = {}
    audio_list = Audio.objects.all()
    context_dict['audio_list'] = audio_list
    context_dict['audio_count'] = len(audio_list)
    return render(request, "audio_management.html", context_dict, status=code)

@login_required
def delete_audio(request, audio_name):
    if request.method=='POST':
        audio = get_object_or_404(Audio, name=audio_name)
        audio.delete()
    elif request.method=='GET':
        raise Http404('GET Method is not allowed')
    return redirect(reverse("AdminControl:manageaudio"))

class get_location(View):
    def get(self, request, *args, **kwargs):
        location = Location.objects.get(pk=kwargs['pk'])
        data = {
            'name': location.name,
            'audios': list(location.audios.values('name', 'audio')),
            'image_paths': list(location.images.values('name', 'image')),
        }
        return JsonResponse(data)

# @method_decorator(login_required, name='dispatch')
class AudioListApiView(APIView):
    # permission_classes = [IsAuthenticated]
    def get(self, request, *args, **kwargs):
        audios = Audio.objects.all()
        serializer = AudioSerializer(audios, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        if "name" not in request.data.keys():
            return Response({'notification': 'No name in input'}, status=status.HTTP_400_BAD_REQUEST)
        if Audio.objects.filter(name=request.data['name']).exists():
            return Response({'notification': 'Duplicated audio name'}, status=status.HTTP_409_CONFLICT)

        serializer = AudioSerializer(data=request.data)
        if serializer.is_valid():
            audio = serializer.save()
            if 'link' in request.FILES:
                audio.link = request.FILES['link']
            if 'image' in request.FILES:
                audio.image = request.FILES['image']
            audio.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # try:
        #     serializer = AudioSerializer(data=request.data)
        #     if serializer.is_valid():
        #         serializer.save()
        #         return Response(serializer.data, status=status.HTTP_201_CREATED)
        #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # except IntegrityError:
        #     #redirect to edit?
        #     return Response({'notification': 'Duplicated audio name'}, status=status.HTTP_409_CONFLICT)

class AudioDetaiApilView(APIView):
    # permission_classes = [IsAuthenticated]
    def not_exist_error(self):
        return Response(
                {"res": "Audio does not exist"},
                status=status.HTTP_400_BAD_REQUEST
        )

    def get(self, request,audio_name, *args, **kwargs):
        audio = Audio.objects.filter(name = audio_name)
        try:
            audio =  Audio.objects.filter(name = audio_name)
        except Audio.DoesNotExist:
            return self.not_exist_error()
        serializer = AudioSerializer(audio)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, audio_name, *args, **kwargs):
        audio = Audio.objects.filter(name = audio_name).first()
        if not audio:
            return self.not_exist_error()
        serializer = AudioSerializer(instance = audio, data=request.data, partial = True)
        if serializer.is_valid():
            audio = serializer.save()
            if 'link' in request.FILES:
                audio.link = request.FILES['link']
            if 'image' in request.FILES:
                audio.image = request.FILES['image']
            audio.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, audio_name, *args, **kwargs):
        audio = Audio.objects.filter(name = audio_name).first()
        if not audio:
            return self.not_exist_error()
        audio.delete()
        return Response(
            {"res": "Audio deleted"},
            status=status.HTTP_200_OK
        )
    
class LocationListApiView(APIView):
    # permission_classes = [IsAuthenticated]
    def get(self, request, *args, **kwargs):
        locations = Location.objects.all()
        serializer = LocationSerializer(locations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        if Location.objects.filter(location_name=request.data['location_name']).exists():
            return Response({'notification': 'Duplicated Location name'}, status=status.HTTP_409_CONFLICT)

        serializer = LocationSerializer(data=request.data)
        if serializer.is_valid():
            location=serializer.save()
            location_name = location.location_name
            model_link = f"http://localhost:3000/english/play/{location_name.replace(' ', '%20')}/"

            # Generate QR code
            qr = qrcode.QRCode(
                version=1,
                error_correction=qrcode.constants.ERROR_CORRECT_L,
                box_size=10,
                border=4,
            )
            qr.add_data(request.build_absolute_uri(model_link))
            qr.make(fit=True)

            # Create an image from the QR Code instance
            qr_image = qr.make_image(fill_color="black", back_color="white")

            # Save the QR code image (you might want to adjust the path)
            qr_image.save(f"qrcode/location_{location_name.replace(' ', '%20')}.png")

            return Response(serializer.data, status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LocationDetaiApilView(APIView):
    # permission_classes = [IsAuthenticated]
    def not_exist_error(self):
        return Response(
                {"res": "Location does not exist"},
                status=status.HTTP_400_BAD_REQUEST
        )

    def get(self, request, location_name, *args, **kwargs):
        try:
            location = Location.objects.get(location_name=location_name)
        except Location.DoesNotExist:
            return self.not_exist_error()
        serializer = LocationSerializer(location)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, location_name, *args, **kwargs):
        location = Location.objects.filter(location_name = location_name).first()
        if not location:
            return self.not_exist_error()
        serializer = LocationSerializer(instance = location, data=request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, location_name, *args, **kwargs):
        location = Location.objects.filter(location_name = location_name).first()
        if not location:
            return self.not_exist_error()
        location.delete()
        return Response(
            {"res": "Audio deleted"},
            status=status.HTTP_200_OK
        )
    
class LocationAudioListApiView(ListAPIView):
    model = Audio
    serializer_class = AudioSerializer
    def get_queryset(self):
        location_name = self.kwargs.get('location_name')
        location = Location.objects.filter(location_name = location_name)
        if not location:
            return self.not_exist_error()
        location = Location.objects.get(location_name = location_name)
        queryset = Audio.objects.filter(location=location)
        return queryset


# Create your views here.
def profile(request):
    return render(request, "users/profile.html")

def register(request):
    if request.method == "GET":
        return render(
            request, "users/register.html",
            {"form": CustomUserCreationForm}
        )
    elif request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect(reverse("AdminControl:profile"))
        else:
            messages.info(request, 'invalid registration details')
            return render(request, "users/register.html", {"form": form})
