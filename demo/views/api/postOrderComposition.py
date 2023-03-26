from django.http import JsonResponse
from demo.models.order.order_table import Order_table
from demo.models.user.user_table import User_table

# POST /api/order_info

def postOrderinfo(request):
    order_number = request.GET.get('order_type_number')
    user_id = request.GET.get('user_id')
    merchant_id = request.GET.get('merchant_id')
    requirement = request.GET.get('requirement')

    # 生成订单信息
    user = User_table.objects.filter(user_id=user_id)
    merchant = Merchant_table.objects.filter(merchant_id=merchant_id)
    order_info=Order_table(
        order_number=order_number,
        user_id=user_id,
        merchant_id=merchant_id,
        order_status=1, # 创建新订单
    )
    order_info.save()
    return JsonResponse({
        'user_name': user.user_name,
        'user.tel':user.user_tel,
        'user.address':user.user_address,
        'merchant_name':merchant.merchant_name,
        'merchant_tel':merchant.merchant_tel,
        'result':"success"
    })



