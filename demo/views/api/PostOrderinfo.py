from django.http import JsonResponse
from demo.models.order.order_table import Order_table
from demo.models.user.user_table import User_table

# POST /api/order_info

def PostOrderinfo(request):
    order_number = request.GET.get('order_type_number')
    user_tel = request.GET.get('user_tel')
    requirement_id = request.GET.get('requirement_id')

    # 生成订单信息
    user = User_table.objects.filter(user_tel=user_tel)
    order_info=Order_table(
        order_number=order_number,
        user_id=user_id,
        order_status=1, # 创建新订单
    )
    order_info.save()
    return JsonResponse({
        'user_name': user.user_name,
        'user.tel':user.user_tel,
        'user.address':user.user_address,
        'result':"success"
    })



