from django.db import models

# Create your models here.


class Audio(models.Model):
    name = models.CharField(max_length=100, unique=True)
    audio = models.FileField(upload_to="music/")
    # uploader = models.CharField(max_length=100)
    # last_modified_time = models.DateTimeField()

    def __str__(self):
        return self.name

    def delete(self, *args, **kwargs):
        self.audio.delete()
        super().delete(*args, **kwargs)
