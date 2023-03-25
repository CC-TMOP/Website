from django.db import models
from django.contrib.auth.models import User

class User_table(models.Model):
    user_id = models.IntegerField(primary_key=True, verbose_name='用户ID')
    user_password = models.CharField(max_length=64, verbose_name='用户密码',null=True)
    user_name = models.CharField(max_length=64, verbose_name='用户姓名')
    user_tel = models.IntegerField(verbose_name='用户电话')
    user_age = models.IntegerField(verbose_name='用户年龄')
    user_address = models.CharField(max_length=64, verbose_name='用户地址')
    user_birthday = models.DateField(verbose_name='用户生日')
    user_id_card= models.CharField(max_length=18, verbose_name='用户身份证')
    user_urgency = models.IntegerField(verbose_name='用户紧急联系人')       
    
    def __str__(self):
        return str(self.user_name)
