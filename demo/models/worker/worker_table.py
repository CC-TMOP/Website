from django.db import models
from django.contrib.auth.models import User

class Worker_table(models.Model):
    worker_id = models.IntegerField(primary_key=True, verbose_name='员工ID')
    worker_name = models.CharField(max_length=64, verbose_name='员工姓名')
    worker_type_id = models.IntegerField(verbose_name='员工类型ID')
    worker_tel = models.CharrField(max_length=11,verbose_name='员工电话')
    worker_email = models.CharField(max_length=64, verbose_name='员工邮箱')
    worker_sex = models.IntegerField(verbose_name='员工性别')
    worker_age = models.IntegerField(verbose_name='员工年龄')
    worker_birthday = models.DateField(verbose_name='员工生日')
    worker_id_card = models.CharField(max_length=18, verbose_name='员工身份证')
    worker_hiredate = models.DateField(verbose_name='员工入职时间')
    worker_remark = models.CharField(max_length=255, verbose_name='员工备注', null=True)

    def __str__(self):
        return str(self.worker_name)
