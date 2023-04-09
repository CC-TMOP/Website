from django.http import JsonResponse
from demo.models.merchant.merchant_table import Merchant_table
from demo.models.order.order_table import Order_table
from demo.models.user.user_table import User_table
from demo.models.requirement.requirement_table import Requirement_table

def GetOrderAllInfo(request):
    order_number = request.GET.get('order_number')
  
    order = Order_table.objects.filter(order_number = order_number).first()
    user = User_table.objects.filter(user_id = order.user_id).first()
    merchant = Merchant_table.objects.filter(merchant_id = order.merchant_id).first()
    requirement = Requirement_table.objects.filter(requirement_id = order.order_type_number).first()

    return JsonResponse({
        'result':"success",
        'user_name':user.user_name,
        'requirement_name':requirement.requirement_name,
        'requirement_id':requirement.requirement_id,
        'user_address':user.user_address,
        'merchant_name':merchant.merchant_address,
        'merchant_id':merchant.merchant_id,
        'merchant_tel':merchant.merchant_tel,
        'order_create_time':order.order_create_time,
        'order_completion_timee':order.order_completion_time,
        'order_status':order.order_status,
        'order_price':order.order_price,
        'order_desc':order.order_desc,
    })





