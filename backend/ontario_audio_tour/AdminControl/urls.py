from django.urls import path, include
from . import views
from django.contrib.auth import views as auth_views
from django.urls import reverse_lazy

app_name="AdminControl"

urlpatterns = [
    path("uploadaudio/", views.upload_audio, name="uploadaudio"),
    path("editaudio/<audio_name>/", views.edit_audio, name="editaudio"),
    path("manageaudio/", views.manage_audio, name="manageaudio"),
    path("deleteaudio/<audio_name>/", views.delete_audio, name="deleteaudio"),
    path('accounts/', include('django.contrib.auth.urls')),
    path("profile/", views.profile, name="profile"),
    path("register/", views.register, name="register"),
    path('password_change/', auth_views.PasswordChangeView.as_view(success_url=reverse_lazy('AdminControl:password_change_done')), name='password_change'),
    # path('password_change/done/', auth_views.PasswordChangeDoneView.as_view(), name='password_change_done'),
]
