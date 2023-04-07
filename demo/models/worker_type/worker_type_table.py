from django.db import models
from django.contrib.auth.models import User

class Worker_type_table(models.Model):
    worker_type_id = models.IntegerField(verbose_name='员工类型ID')
    worker_type_name = models.CharField(max_length=64, verbose_name='员工类型名称')
    worker_type_remark = models.CharField(max_length=255, verbose_name='员工类型备注', null=True)