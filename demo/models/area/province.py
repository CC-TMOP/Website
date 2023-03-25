from django.db import models

class Province(models.Model):
    code = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=64)
