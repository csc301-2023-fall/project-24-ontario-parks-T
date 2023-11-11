from django.shortcuts import render
from AdminControl.forms import CustomUserCreationForm
from django.contrib.auth import login
from django.shortcuts import redirect, render
from django.urls import reverse
from django.contrib import messages

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