from django.urls import path, include
from . import views
from django.contrib.auth import views as auth_views
from django.urls import reverse_lazy
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

app_name="Accounts"

urlpatterns = [
    path('accounts/', include('django.contrib.auth.urls')),
    path("profile/", views.profile, name="profile"),
    path("register/", views.register, name="register"),
    path('password_change/', auth_views.PasswordChangeView.as_view(success_url=reverse_lazy('AdminControl:password_change_done')), name='password_change'),
]
