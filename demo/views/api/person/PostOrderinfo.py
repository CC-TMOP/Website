from django.http import JsonResponse
from demo.models.order.order_table import Order_table
from demo.models.user.user_table import User_table

# POST /api/order_info

def PostOrderinfo(request):
    user_name = request.GET.get('user_name')
    user_tel = request.GET.get('phonenumber')
    requirement_id = request.GET.get('requirement_id')

    # 生成订单号
    getOrderNumber(user_tel,requirement_id)

    return JsonResponse({
        'result':"success"
    })


def PostRobotOrderinfo(request):
    user_id = request.GET.get('user_id')
    requirement_id = request.GET.get('requirement_id')

    user = User_table.objects.filter(user_id=user_id)

    # 生成订单号
    getOrderNumber(user.user_tel,requirement_id)

    return JsonResponse({
        'result':"success"
    })


def getOrderNumber(user_tel, requirement_id):
    DateTime = str("{}".format(time.strftime('%y%m%d%H%M%S',time.localtime())))

    user = User_table.objects.filter(user_tel=user_tel)
    
    id = str(user.user_id)[5:] # 取第5位到末尾，总共10位
    order_num = DataTime + id + str(requirement_id)

    # 生成订单号
    order_info=Order_table(
        order_number = order_num,
        user_id = user.user_id,
        order_create_time=dateTime,
        order_type_number=requirement_id,
        order_status = 1, # 创建新订单
    )
    order_info.save()

    return true