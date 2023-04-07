from django.db import models

class City(models.Model):
    code = models.CharField(max_length=64, primary_key=True)
    name = models.CharField(max_length=64)
    provinceCode = models.IntegerField()
