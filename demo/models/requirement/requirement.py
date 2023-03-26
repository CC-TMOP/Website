from django.db import models

class Requirement(models.Model):
    requirement_id = models.IntegerField(primary_key=True,verbose_name='需求id')
    requirement_name = models.CharField(max_length=64,verbose_name='需求名称')
    requirement_value = models.IntegerField(verbose_name='需求价格')
