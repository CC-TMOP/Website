from django.db import models
from django.contrib.auth.models import User

class User_level_time_table(models.Model):
    user_id = models.CharField(primary_key=True,max_length=25,verbose_name='用户ID')
    user_level_id = models.IntegerField(verbose_name='用户等级ID')
    user_level_deadline = models.DateField(verbose_name='用户等级到期时间')