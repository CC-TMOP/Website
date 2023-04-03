from django.db import models
from django.contrib.auth.models import User

class Worker_table(models.Model):
    worker_id = models.IntegerField(primary_key=True, verbose_name='工作人员ID')
    worker_name = models.CharField(max_length=64, verbose_name='工作人员姓名')
    worker_level = models.IntegerField(verbose_name='工作人员类型')
    worker_tel = models.IntegerField(verbose_name='工作人员电话')
    
    def __str__(self):
        return str(self.worker_name)
