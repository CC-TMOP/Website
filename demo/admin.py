from django.contrib import admin
from demo.models.user.user_table import User_table
from demo.models.order.order_table import Order_table
from demo.models.merchant.merchant import Merchant_table
from demo.models.area.district import District
from demo.models.area.city import City
from demo.models.area.province import Province
from demo.models.area.street import Street

class OrderAdmin(admin.ModelAdmin):
    list_display = ['order_number','merchant_uid','buyer_id','product_name','product_price','completion_status','order_creation_date']


class UserAdmin(admin.ModelAdmin):
    list_display = ['user_id', 'user_name','user_tel', 'user_age', 'user_address', 'user_birthday', 'user_id_card', 'user_urgency']


class MerchantAdmin(admin.ModelAdmin):
    list_display = ['merchant_id','merchant_name','merchant_password','merchant_address','merchant_status',"service_type","block"]

class DistrictAdmin(admin.ModelAdmin):
    list_display = ['code','name','cityCode','provinceCode']
    ordering=('code',)

class CityAdmin(admin.ModelAdmin):
    list_display = ['code','name','provinceCode']
    ordering=('code',)

class ProvinceAdmin(admin.ModelAdmin):
    list_display = ['code','name']
    ordering=('code',)

class StreetAdmin(admin.ModelAdmin):
    list_display = ['code','name','districtCode','cityCode','provinceCode']
    ordering=('code',)

# Register your models here.

admin.site.register(User_table, UserAdmin)
admin.site.register(Order_table,OrderAdmin)
admin.site.register(Merchant_table,MerchantAdmin)
admin.site.register(District,DistrictAdmin)
admin.site.register(City,CityAdmin)
admin.site.register(Province,ProvinceAdmin)
admin.site.register(Street,StreetAdmin)
