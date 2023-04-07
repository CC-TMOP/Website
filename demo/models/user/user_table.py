from django.db import models
from django.contrib.auth.models import User

class User_table(models.Model):
    user_id = models.CharField(primary_key=True,max_length=25,verbose_name='用户ID')
    user_name = models.CharField(max_length=64, verbose_name='用户姓名')
    user_sex = models.IntegerField(verbose_name='用户性别') # 1:男 2:女
    user_tel = models.IntegerField(verbose_name='用户电话')
    user_age = models.IntegerField(verbose_name='用户年龄')
    user_address = models.CharField(max_length=64, verbose_name='用户地址')
    user_address_code = models.IntegerField(verbose_name='地址ID',null=True)
    user_birthday = models.DateField(verbose_name='用户生日')
    user_id_card= models.CharField(max_length=18, verbose_name='用户身份证')
    user_remark= models.CharField(max_length=255, verbose_name='用户备注',null=True)
    
    def __str__(self):
        return str(self.user_name)
