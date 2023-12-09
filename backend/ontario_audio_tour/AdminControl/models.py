from django.db import models

# Create your models here.


class Audio(models.Model):
    """
    The model used to store audio. Audio save location as a foreign key, 
    locations can have a one to many relationship with audios.
    """
    media_id = models.AutoField(primary_key=True, unique=True)
    location = models.ForeignKey(
        "Location", on_delete=models.CASCADE, db_column="location", null=True)
    name = models.CharField(max_length=100, unique=True)
    link = models.CharField(max_length=100)
    type = models.CharField(max_length=100, default="audio")
    description = models.CharField(max_length=500, default="")
    image = models.CharField(max_length=100, default="default.jpg")
    season = models.CharField(max_length=100, default="Spring")
    year = models.IntegerField(null=True)
    month = models.IntegerField(null=True)
    day = models.IntegerField(null=True)
    longitude = models.FloatField(null=True)
    latitude = models.FloatField(null=True)
    name_french = models.CharField(max_length=100, unique=True)
    description_french = models.CharField(max_length=500, default="")

    class Meta:
        db_table = "medias"

    def __str__(self):
        return self.name


class Location(models.Model):
    """
    The model used to store location.
    """
    location_id = models.AutoField(primary_key=True, unique=True)
    location_name = models.CharField(max_length=100, unique=True)
    location_address = models.CharField(max_length=100, unique=False,null=True)
    location_city = models.CharField(max_length=100, unique=False,null=True)
    location_province = models.CharField(max_length=100, unique=False,null=True)
    location_postal_code = models.CharField(max_length=100, unique=False,null=True)
    longitude = models.FloatField(null=True)
    latitude = models.FloatField(null=True)

    class Meta:
        db_table = "locations"

    def __str__(self):
        return self.location_name
