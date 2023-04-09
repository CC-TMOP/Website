from django.contrib import admin
from demo.models.area.district import District
from demo.models.area.city import City
from demo.models.area.province import Province
from demo.models.area.street import Street
from demo.models.basic_requirement.basic_requirement_table import Basic_requirement_table
from demo.models.bill.bill_table import Bill_table
from demo.models.merchant.merchant_table import Merchant_table
from demo.models.order.order_table import Order_table
from demo.models.requirement.requirement_table import Requirement_table
from demo.models.urgency.urgency_table import Urgency_table
from demo.models.user.user_table import User_table
from demo.models.user_level.user_level_table import User_level_table
from demo.models.user_level_time.user_level_time_table import User_level_time_table
from demo.models.worker.worker_table import Worker_table
from demo.models.worker_type.worker_type_table import Worker_type_table


class Basic_requirementAdmin(admin.ModelAdmin):
    list_display = ['basic_requirement_id','basic_requirement_name']

class BillAdmin(admin.ModelAdmin):
    list_display = ['bill_id','order_number','account_id','bill_type','bill_time','bill_money','bill_remark']

class MerchantAdmin(admin.ModelAdmin):
    list_display = ['merchant_id','merchant_password','merchant_name','merchant_tel','merchant_address','merchant_address_code','merchant_status','service_type','block','merchant_assistant_name','merchant_assistant_tel','merchant_remark']

class OrderAdmin(admin.ModelAdmin):
    list_display = ['order_number','user_id','merchant_id','order_create_time','order_complete_time','order_type_number','order_status','order_price','order_comment','order_pay_type']

class RequirementAdmin(admin.ModelAdmin):
    list_display = ['requirement_id','requirement_name','requirement_value']

class UrgencyAdmin(admin.ModelAdmin):
    list_display = ['urgency_id','user_id','urgency_tel','urgency_name','urgency_relation']

class UserAdmin(admin.ModelAdmin):
    list_display = ['user_id', 'user_name','user_sex','user_tel', 'user_age', 'user_address', 'user_address_code','user_address_code','user_birthday', 'user_id_card', 'user_remark']

class User_levelAdmin(admin.ModelAdmin):
    list_display = ['user_level_id','user_level_price','user_level_discount','user_level_content']

class User_level_timeAdmin(admin.ModelAdmin):
    list_display = ['user_id','user_level_id','user_level_deadline']

class WorkerAdmin(admin.ModelAdmin):
    list_display = ['worker_id','worker_name','worker_type_id','worker_tel','worker_email','worker_sex','worker_age','worker_birthday','worker_id_card','worker_hiredate','worker_remark']

class Worker_typeAdmin(admin.ModelAdmin):
    list_display = ['worker_type_id','worker_type_name','worker_type_remark']

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

admin.site.register(Basic_requirement_table,Basic_requirementAdmin)
admin.site.register(Bill_table,BillAdmin)
admin.site.register(Merchant_table,MerchantAdmin)
admin.site.register(Order_table,OrderAdmin)
admin.site.register(Requirement_table,RequirementAdmin)
admin.site.register(Urgency_table,UrgencyAdmin)
admin.site.register(User_table, UserAdmin)
admin.site.register(User_level_table,User_levelAdmin)
admin.site.register(User_level_time_table,User_level_timeAdmin)
admin.site.register(Worker_table,WorkerAdmin)
admin.site.register(Worker_type_table,Worker_typeAdmin)
admin.site.register(District,DistrictAdmin)
admin.site.register(City,CityAdmin)
admin.site.register(Province,ProvinceAdmin)
admin.site.register(Street,StreetAdmin)

