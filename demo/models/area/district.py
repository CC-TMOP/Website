from django.db import models

class District(models.Model):
    code = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=64)
    cityCode = models.IntegerField()
    provinceCode = models.IntegerField()

