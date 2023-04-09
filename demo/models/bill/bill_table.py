from django.db import models
from django.contrib.auth.models import User

class Bill_table(models.Model):
    bill_id = models.IntegerField(primary_key=True, verbose_name='账单ID')
    order_number = models.CharField(max_length=25,verbose_name='订单ID',null=True)
    account_id = models.IntegerField(verbose_name='账户ID')
    bill_type = models.IntegerField(verbose_name='账单类别') # 1:支出 2:入账
    bill_time = models.DateTimeField(verbose_name='账单时间')
    bill_money = models.FloatField(verbose_name='账单金额',null=True)
    bill_remark = models.CharField(max_length=255, verbose_name='账单备注',null=True)
