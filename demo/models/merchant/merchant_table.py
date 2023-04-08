from django.db import models
from django.contrib.auth.models import User

class Merchant_table(models.Model):
    merchant_id = models.IntegerField(primary_key=True, verbose_name='商家ID')
    merchant_password = models.CharField(max_length=25,verbose_name='商家密码',null=True)
    merchant_name = models.CharField(max_length=64,verbose_name='商家名称')
    merchant_tel = models.CharField(max_length=11,verbose_name='商家电话')
    merchant_address = models.CharField(max_length=64,verbose_name='商家地址',null=True)
    merchant_address_code = models.IntegerField(verbose_name='地址ID',null=True)
    merchant_status = models.IntegerField(verbose_name='商家状态',null=True) 
    service_type = models.IntegerField(verbose_name='服务类型ID',null=True) # 1,2,3,4,5 需求大类
    block = models.IntegerField(verbose_name='区块ID',null=True)
    merchant_assistant_name = models.CharField(max_length=64,verbose_name='店员姓名', null=True)
    merchant_assistant_tel = models.CharField(max_length=11,verbose_name='店员电话', null=True)
    merchant_remark = models.CharField(max_length=255, verbose_name='商家备注', null=True)

    def __str__(self):
        return str(self.merchant_name)

