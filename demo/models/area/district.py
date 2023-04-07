from django.db import models

class District(models.Model):
    code = models.CharField(max_length=64, primary_key=True)
    name = models.CharField(max_length=64)
    cityCode = models.CharField(max_length=64)
    provinceCode = models.CharField(max_length=64)

