import os

from django.shortcuts import render, redirect, get_object_or_404
from django.http import Http404, HttpResponseBadRequest
from AdminControl.models import Audio
from django.contrib.auth import login
from django.shortcuts import redirect, render
from django.urls import reverse
from AdminControl.forms import CustomUserCreationForm
from django.db import IntegrityError
from django.contrib.auth.decorators import login_required
from django.contrib import messages

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
