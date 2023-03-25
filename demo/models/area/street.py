from django.db import models
class Street(models.Model):
    code = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=64)
    districtCode = models.IntegerField()
    cityCode = models.IntegerField()
    provinceCode = models.IntegerField()

