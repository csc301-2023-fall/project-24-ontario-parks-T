from django.db import models

# Create your models here.


class Audio(models.Model):
    media_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, unique=True)
    audio = models.FileField(upload_to="music/")
    type = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    image = models.ImageField(upload_to="images/")
    season = models.CharField(max_length=100)
    year = models.IntegerField()
    month = models.IntegerField()
    day = models.IntegerField()
    longitude = models.FloatField()
    latitude = models.FloatField()
    # uploader = models.CharField(max_length=100)
    # last_modified_time = models.DateTimeField()

    def __str__(self):
        return self.name

    def delete(self, *args, **kwargs):
        self.audio.delete()
        super().delete(*args, **kwargs)


class Image(models.Model):
    name = models.CharField(max_length=100, unique=True)
    image = models.ImageField(upload_to="images/")

    def __str__(self):
        return self.name

    def delete(self, *args, **kwargs):
        self.image.delete()
        super().delete(*args, **kwargs)



class Location(models.Model):
    name = models.CharField(max_length=100, unique=True)
    audios = models.ManyToManyField(Audio)
    images = models.ManyToManyField(Image)

    def __str__(self):
        return self.name