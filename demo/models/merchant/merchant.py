from django.db import models
from django.contrib.auth.models import User

class Merchant_table(models.Model):
    merchant_id = models.IntegerField(primary_key=True, verbose_name='商家ID')
    merchant_password = models.CharField(max_length=64,verbose_name='商家密码',null=True)
    merchant_name = models.CharField(max_length=64,verbose_name='商家名称')
    merchant_address = models.CharField(max_length=64,verbose_name='商家地址',null=True)
    merchant_status = models.IntegerField(verbose_name='商家状态',null=True)
    service_type = models.IntegerField(verbose_name='服务类型ID',null=True)
    block = models.IntegerField(verbose_name='区块ID',null=True)
    
    def __str__(self):
        return str(self.merchant_name)

