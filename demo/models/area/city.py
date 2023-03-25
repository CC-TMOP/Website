from django.db import models

class City(models.Model):
    code = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=64)
    provinceCode = models.IntegerField()
