from django.db import models

# Create your models here.


class Audio(models.Model):
    media_id = models.AutoField(primary_key=True, unique=True, default=0)
    name = models.CharField(max_length=100, unique=True)
    link = models.FileField(upload_to="audio/", default="")
    type = models.CharField(max_length=100, default="audio")
    description = models.CharField(max_length=500, default="")
    image = models.ImageField(upload_to="images/", default="")
    season = models.CharField(max_length=100, default="Spring")
    year = models.IntegerField(null=True)
    month = models.IntegerField(null=True)
    day = models.IntegerField(null=True)
    longitude = models.FloatField(null=True)
    latitude = models.FloatField(null=True)
    # uploader = models.CharField(max_length=100)
    # last_modified_time = models.DateTimeField()

    class Meta:
        db_table = "medias"

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
    Location_id = models.AutoField(primary_key=True, unique=True)
    location_name = models.CharField(max_length=100, unique=True)
    location_address = models.CharField(max_length=100, unique=True)
    location_city = models.CharField(max_length=100, unique=True)
    location_province = models.CharField(max_length=100, unique=True)
    location_postal_code = models.CharField(max_length=100, unique=True)
    location_longitude = models.FloatField(null=True)
    location_latitude = models.FloatField(null=True)

    class Meta:
        db_table = "locations"

    def __str__(self):
        return self.name
    

class locations_have_medias(models.Model):
    pair_id = models.AutoField(primary_key=True, unique=True)
    Location_id = models.ForeignKey(Location, on_delete=models.CASCADE)
    media_id = models.ForeignKey(Audio, on_delete=models.CASCADE)

    class Meta:
        db_table = "locations_have_medias"
        unique_together = (("Location_id", "media_id"),)