from django.db import models
from django.contrib.auth.models import User

class Basic_requirement_table(models.Model):
    basic_requirement_id = models.IntegerField(primary_key=True,verbose_name='需求大类ID')
    basic_requirement_name = models.CharField(max_length=64, verbose_name='需求大类名称')