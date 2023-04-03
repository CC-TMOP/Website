from django.http import JsonResponse
from demo.models.user.user_table import User_table
from demo.models.order.order_table import Order_table

# 生成订单号
def getOrderNumber(request):
    user_tel = request.GET.get('user_tel')
    requirement_id = request.GET.get('requirement_id')

    DateTime = str("{}".format(time.strftime('%y%m%d%H%M%S',time.localtime())))

    user = User_table.objects.filter(user_tel=user_tel)
    
    id = str(user_id)[5:] # 取第5位到末尾，总共10位
    order_num = DataTime + str(user_id) + str(requirement_id)

    # 生成订单号
    order_info=Order_table(
        order_number = order_num,
        user_id = user.user_id,
        order_status = 1, # 创建新订单
    )
    order_info.save()

    return JsonResponse({
        'result':"success"
    })

def getRobotOrderNumber(request):
    user_id = request.GET.get('user_id')
    requirement_id = request.GET.get('requirement_id')

    DateTime = str("{}".format(time.strftime('%y%m%d%H%M%S',time.localtime())))

    user = User_table.objects.filter(user_id=user_id)
    
    id = str(user_id)[5:] # 取第5位到末尾，总共10位
    order_num = DataTime + str(user_id) + str(requirement_id)

    # 生成订单号
    order_info=Order_table(
        order_number = order_num,
        user_id = user.user_id,
        order_status = 1, # 创建新订单
    )
    order_info.save()

    return JsonResponse({
        'result':"success"
    })

