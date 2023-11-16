from django.db import models

# Create your models here.


class Audio(models.Model):
    media_id = models.AutoField(primary_key=True, unique=True, default=0)
    location = models.ForeignKey(
        "Location", on_delete=models.CASCADE, db_column="location")
    name = models.CharField(max_length=100, unique=True)
    link = models.CharField(max_length=100, unique=True)
    type = models.CharField(max_length=100, default="audio")
    description = models.CharField(max_length=500, default="")
    image = models.CharField(max_length=100, default="default.jpg")
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
    location_id = models.AutoField(primary_key=True, unique=True)
    location_name = models.CharField(max_length=100, unique=True)
    location_address = models.CharField(max_length=100, unique=False)
    location_city = models.CharField(max_length=100, unique=False)
    location_province = models.CharField(max_length=100, unique=False)
    location_postal_code = models.CharField(max_length=100, unique=False)
    longitude = models.FloatField(null=False)
    latitude = models.FloatField(null=False)

    class Meta:
        db_table = "locations"

    def __str__(self):
        return self.location_name
    