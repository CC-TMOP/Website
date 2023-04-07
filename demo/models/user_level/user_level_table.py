from django.db import models
from django.contrib.auth.models import User

class User_level_table(models.Model):
    user_level_id = models.IntegerField(primary_key=True,verbose_name='用户等级ID')
    user_level_price = models.IntegerField(verbose_name='用户等级价格')
    user_level_discount = models.FloatField(verbose_name='用户等级折扣')
    user_level_content = models.CharField(max_length=255, verbose_name='用户等级内容', null=True)