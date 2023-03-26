from django.http import JsonResponse
from demo.models.user.user_table import User_table
from demo.models.order.order_table import Order_table

# 生成订单号
def getOrderNumber(request):
    user_tel = request.GET.get('user_tel')
    requirement_id = request.GET.get('requirement_id')

    DateTime = str("{}".format(time.strftime('%y%m%d%H%M%S',time.localtime())))

    user = User_table.objects.filter(user_tel=user_tel)
    
    order_num = DataTime + str(user_id) + str(requirement_id)

    order_info=Order_table(
        order_number=order_num,
        user_id=user_id,
        order_status=1, # 创建新订单
    )
    order_info.save()

    return JsonResponse({
        'result':"success"
    })


