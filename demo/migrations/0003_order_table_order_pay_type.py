# Generated by Django 3.2.8 on 2023-04-07 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('demo', '0002_auto_20230405_1440'),
    ]

    operations = [
        migrations.AddField(
            model_name='order_table',
            name='order_pay_type',
            field=models.IntegerField(default=0, verbose_name='结算类型'),
            preserve_default=False,
        ),
    ]
