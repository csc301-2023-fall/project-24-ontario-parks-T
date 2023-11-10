from django.urls import path, include
from . import views
from django.contrib.auth import views as auth_views
from django.urls import reverse_lazy
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

app_name="AdminControl"

urlpatterns = [
    path("audio/upload/", views.upload_audio, name="uploadaudio"),
    path("audio/edit/<audio_name>/", views.edit_audio, name="editaudio"),
    path("audio/manage/", views.manage_audio, name="manageaudio"),
    path("audio/delete/<audio_name>/", views.delete_audio, name="deleteaudio"),

    path('api/audio/', views.AudioListApiView.as_view(), name='audio-api-list'),
    path('api/audio/<str:audio_name>/', views.AudioDetaiApilView.as_view(), name='audio-api-detail'),
    path("api/location/get/<int:pk>/", views.get_location.as_view(), name="getlocation"),
    
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('accounts/', include('django.contrib.auth.urls')),
    path("profile/", views.profile, name="profile"),
    path("register/", views.register, name="register"),
    path('password_change/', auth_views.PasswordChangeView.as_view(success_url=reverse_lazy('AdminControl:password_change_done')), name='password_change'),
    # path('password_change/done/', auth_views.PasswordChangeDoneView.as_view(), name='password_change_done'),
]
