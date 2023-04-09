from django.db import models
from django.contrib.auth.models import User

class Order_table(models.Model):
    order_number = models.CharField(primary_key=True,max_length=25,verbose_name='订单ID')
    user_id = models.CharField(max_length=25,verbose_name='用户ID')
    merchant_id = models.IntegerField(verbose_name='商家ID',null=True)
    order_create_time = models.DateTimeField(verbose_name='订单创建时间')
    order_complete_time = models.DateTimeField(verbose_name='订单完成时间',null=True)
    order_type_number = models.IntegerField(verbose_name='需求ID')
    order_status = models.IntegerField(verbose_name='订单状态',null=True) # 1:预订单 2:进行中 3:已完成
    order_price = models.FloatField(verbose_name='订单价格',null=True)
    order_comment = models.CharField(max_length=255, verbose_name='订单评价',null=True)
    order_pay_type = models.IntegerField(verbose_name='结算类型',null=True) # 1:现金 2:账户

   #  def __str__(self):
   #  return "订单编号：%s 商家id:%s 买家id:%s"%(self.order_number, self.merchant_id)
