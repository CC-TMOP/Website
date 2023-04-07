from django.db import models
from django.contrib.auth.models import User

class Account_table(models.Model):
    account_id = models.IntegerField(primary_key=True, verbose_name='账户ID')
    user_id = models.CharField(max_length=25, verbose_name='用户ID')
    account_password = models.CharField(max_length=25, verbose_name='账户密码')
    account_balance = models.FloatField(verbose_name='账户余额', null=True)
