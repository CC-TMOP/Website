import datetime
import json
import time
from django.http import JsonResponse
from demo.models.order.order_table import Order_table
from demo.models.user.user_table import User_table

# POST /api/order_info

def PostOrderInfo(request):
    # user_name = request.GET.get('user_name')
    # user_tel = request.GET.get('user_tel')
    # requirement_id = request.GET.get('requirement_id')

   # if request.method == 'POST':  
    # user_name = request.body.decode().get('user_name')  
     #  user_tel = request.body.decode().get('user_tel')  
 #   requirement_id = request.body.decode().get('requirement_id')

    #    data = json.loads(request.body.decode())  
    user_name = request.POST.get('user_name')
    user_tel = request.POST.get('user_tel')
    requirement_id = request.POST.get('requirement_id')


    print(request.META.get("HTTP_API_AUTH"))
    print(request.body)
    # 生成订单号
    getOrderNumber(user_tel,requirement_id) 

    return JsonResponse({
        'result':"success"
    })      


def PostRobotOrderInfo(request):
    user_id = request.GET.get('user_id','')
    requirement_id = request.GET.get('requirement_id','')
    
    # user_id = request.POST.get('user_id')
    # requirement_id = request.POST.get('requirement_id')

    # json_str = request.body
    # received_json_data = json.loads(request.body)
    # print(received_json_data)

    # user_id = json.loads(request.body.decode()).get('user_id')
    # requirement_id = json.loads(request.body.decode()).get('requirement_id')

    print(request.body)

    if user_id :
        user = User_table.objects.filter(user_id=user_id).first()
    else:
        return JsonResponse({
            'result':"failed: user id is null"
        })


    # 生成订单号
    getOrderNumber(user.user_tel,requirement_id)

    return JsonResponse({
        'result':"success"
    })


def getOrderNumber(user_tel, requirement_id):
    DateTime = str("{}".format(time.strftime('%y%m%d%H%M%S',time.localtime())))

    user = User_table.objects.filter(user_tel=user_tel).first()
    print(user)
    id = str(user.user_id)[-8:] # 取第5位到末尾，总共10位
    print(DateTime)
    order_num = DateTime + id + str(requirement_id)  # 12+8+3

    # 生成订单号
    order_info=Order_table(
        order_number = order_num,
        user_id = user.user_id,
        order_create_time=datetime.datetime.now().strftime(r"%Y-%m-%d %H:%M:%S"),
        order_type_number=requirement_id,
        order_status = 1 # 创建新订单
    )
    order_info.save()

    return True
