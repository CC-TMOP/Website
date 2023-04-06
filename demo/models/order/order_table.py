from django.db import models

class Order_table(models.Model):
    order_number = models.AutoField(primary_key=True, verbose_name='订单编号') # 订单编号，主键
    user_id = models.IntegerField(verbose_name='用户ID') # 用户ID
    merchant_id = models.IntegerField(verbose_name='商家ID') # 商家ID
    order_create_time = models.DateTimeField(verbose_name='订单创建时间')
    order_complete_time = models.DateTimeField(verbose_name='订单完成时间')
    order_type_number = models.IntegerField(verbose_name='需求ID')
    order_status = models.IntegerField(verbose_name='订单状态') # 1:预订单 2:进行中 3:已完成 
    order_price = models.IntegerField(verbose_name='订单价格') 
    order_comment = models.CharField(max_length=255, verbose_name='订单评论')
    order_pay_type = models.IntegerField(verbose_name='结算类型')

    def __str__(self):
        return "订单编号：%s 商家id:%s 买家id:%s"%(self.order_number, self.merchant_uid, self.buyer_id)
