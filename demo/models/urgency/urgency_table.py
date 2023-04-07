from django.db import models
from django.contrib.auth.models import User

class Urgency_table(models.Model):
    urgency_id = models.IntegerField(primary_key=True,verbose_name='紧急联系人ID')
    user_id = models.CharField(max_length=25, verbose_name='用户ID')
    urgency_tel = models.IntegerField(verbose_name='紧急联系人电话')
    urgency_name = models.CharField(max_length=64, verbose_name='紧急联系人姓名')
    urgency_relation = models.CharField(max_length=64, verbose_name='与用户的关系', null=True)