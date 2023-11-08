from django.test import TestCase
from django.contrib.auth import get_user
from django.contrib.auth.models import User

# Create your tests here.
from django.test import SimpleTestCase, TestCase, Client, override_settings
from django.core.files.uploadedfile import SimpleUploadedFile
from django.urls import reverse, resolve
from .views import *
from .forms import CustomUserCreationForm
from AdminControl.models import Audio
from django.contrib.auth.views import *
import shutil, tempfile

class TestUrls(SimpleTestCase):
    def test_uploadaudio_url_is_resolved(self):
        url = reverse('AdminControl:uploadaudio')
        self.assertEquals(resolve(url).func, upload_audio)

    def test_manageaudio_url_is_resolved(self):
        url = reverse('AdminControl:manageaudio')
        self.assertEquals(resolve(url).func, manage_audio)

    def test_editaudio_url_is_resolved(self):
        url = reverse('AdminControl:editaudio', args=[1])
        self.assertEquals(resolve(url).func, edit_audio)

    def test_deleteaudio_url_is_resolved(self):
        url = reverse('AdminControl:deleteaudio', args=[1])
        self.assertEquals(resolve(url).func, delete_audio)

    def test_register_url_is_resolved(self):
        url = reverse('AdminControl:register')
        self.assertEquals(resolve(url).func, register)
    
    def test_login_url_is_resolved(self):
        url = reverse('AdminControl:login')
        self.assertEquals(resolve(url).func.view_class, LoginView)

    def test_logout_url_is_resolved(self):
        url = reverse('AdminControl:logout')
        self.assertEquals(resolve(url).func.view_class, LogoutView)

    def test_password_change_url_is_resolved(self):
        url = reverse('AdminControl:password_change')
        self.assertEquals(resolve(url).func.view_class, PasswordChangeView)

    def test_password_change_done_url_is_resolved(self):
        url = reverse('AdminControl:password_change_done')
        self.assertEquals(resolve(url).func.view_class, PasswordChangeDoneView)
    
    def test_profile_url_is_resolved(self):
        url = reverse('AdminControl:profile')
        self.assertEquals(resolve(url).func, profile)


MEDIA_ROOT = tempfile.mkdtemp()


@override_settings(MEDIA_ROOT=MEDIA_ROOT)
class TestModels(TestCase):
    @classmethod
    def tearDownClass(cls):
        shutil.rmtree(MEDIA_ROOT, ignore_errors=True)
        super().tearDownClass()

    def setUp(self):
        User.objects.create_user(username='superAdmin', password='csc301')
        self.client.login(username='superAdmin', password='csc301')
        pass

    def test_uploadaudio_GET_guest(self):
        client = Client()
        response = client.get(reverse('AdminControl:uploadaudio'))
        self.assertEquals(response.status_code, 302)

    def test_manageaudio_GET_guest(self):
        client = Client()
        response = client.get(reverse('AdminControl:manageaudio'))
        self.assertEquals(response.status_code, 302)

    def test_editaudio_GET_guest(self):
        client = Client()
        response = client.get(reverse('AdminControl:editaudio', args=[1]))
        self.assertEquals(response.status_code, 302)

    def test_deleteaudio_GET_guest(self):
        client = Client()
        response = client.get(reverse('AdminControl:deleteaudio', args=[1]))
        self.assertEquals(response.status_code, 302)
    
    def test_upload_audio(self):
        audio_file = SimpleUploadedFile("file.mp3", b"file_content", content_type="audio/mpeg")
        response = self.client.post(reverse('AdminControl:uploadaudio'), {'audiofile': audio_file,
                                                                          'audioname': 'test_audio'})

        self.assertEqual(response.status_code, 302)

        audio_exists = Audio.objects.filter(name='test_audio').exists()
        self.assertTrue(audio_exists)

        audio = Audio.objects.get(name='test_audio')
        self.assertEqual(audio.audio.read(), b"file_content")

    def test_upload_audio_duplicate(self):
        audio_file = SimpleUploadedFile("file.mp3", b"file_content", content_type="audio/mpeg")
        Audio.objects.create(name='test_audio', audio=audio_file)
        response = self.client.post(reverse('AdminControl:uploadaudio'), {'audiofile': audio_file,
                                                                          'audioname': 'test_audio'})
        self.assertEqual(response.context['notification'], 'Duplicated audio name')

class LoginTestCase(TestCase):
    def setUp(self):
        User.objects.create_user(username='superAdmin', password='csc301')

    def test_login(self):
        response = self.client.get(reverse('AdminControl:login'))
        self.assertEquals(response.status_code, 200) #check if login page loaded
        self.client.login(username='superAdmin', password='csc301')
        user = get_user(self.client)
        self.assertTrue(user.is_authenticated) #check if logged in successfully

    def test_logout(self):
        response = self.client.get(reverse('AdminControl:logout'))
        self.assertEqual(response.status_code, 200)
        self.client.login(username='superAdmin', password='csc301')
        self.client.logout()
        user = get_user(self.client)
        self.assertFalse(user.is_authenticated)

class RegisterTestCase(TestCase):
    def setUp(self):
        self.client = Client()
        self.url = reverse('AdminControl:register')

    def test_register_view_success(self):
        validUser = {
            'username': 'testuser',
            'email': 'testuser@example.com',
            'password1': 'testpassword',
            'password2': 'testpassword'
        }
        form = CustomUserCreationForm(validUser)
        self.assertTrue(form.is_valid())
        response = self.client.post(self.url, validUser)
        self.assertEqual(response.status_code, 302) #check if redirected
        self.assertRedirects(response, reverse("AdminControl:profile")) #check if redirects to profile page

        user = User.objects.get(username='testuser')
        self.assertIsNotNone(user) #check if user is created
        self.assertTrue(user.check_password('testpassword')) #check if password is correct

    def test_register_view_invalid_form(self):
        invalidUser = {
            'username': 'testuser',
            'email': 'testuser@example.com',
            'password1': 'testpassword',
            'password2': 'wrongpassword'
        }
        form = CustomUserCreationForm(invalidUser)
        self.assertFalse(form.is_valid())
        response = self.client.post(self.url, invalidUser)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'users/register.html') #check template used

        form = response.context['form']
        self.assertTrue(form.has_error('password2')) #check password error

        user_exists = User.objects.filter(username='testuser').exists()
        self.assertFalse(user_exists) #check user not created