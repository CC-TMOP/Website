from django.http import JsonResponse
from demo.models.order.order_table import Order_table
from demo.models.user.user_table import User_table


def GetOrderIdToInfo(request):
    order_number = request.GET.get('OrderId')
   
    order = Order_table.objects.filter(order_number=order_number).first()
    user = User_table.objects.filter(user_id=order.user_id).first()
    
    city_code = str(user.user_address_code)[8:]

    return JsonResponse({
        'result':"success",
        'username':user.user_name,
        'phonenumber':user.user_tel,
        'requirement':order.order_type_number,
        'useraddress':user.user_address,
        'city':city_code
    })


