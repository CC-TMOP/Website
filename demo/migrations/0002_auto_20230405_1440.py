# Generated by Django 3.2.8 on 2023-04-05 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('demo', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order_table',
            name='order_desc',
        ),
        migrations.AddField(
            model_name='merchant_table',
            name='merchant_address_code',
            field=models.IntegerField(default=1, verbose_name='地址ID'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order_table',
            name='order_comment',
            field=models.CharField(default=0, max_length=255, verbose_name='订单评论'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order_table',
            name='order_price',
            field=models.IntegerField(default=0, verbose_name='订单价格'),
            preserve_default=False,
        ),
    ]
