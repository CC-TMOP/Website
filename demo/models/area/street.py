from django.db import models
class Street(models.Model):
    code = models.CharField(max_length=64, primary_key=True)
    name = models.CharField(max_length=64)
    districtCode = models.CharField(max_length=64)
    cityCode = models.CharField(max_length=64)
    provinceCode = models.CharField(max_length=64)

