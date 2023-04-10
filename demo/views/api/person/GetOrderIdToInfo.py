from django.http import JsonResponse
from demo.models.order.order_table import Order_table
from demo.models.user.user_table import User_table


def GetOrderIdToInfo(request):
    order_number = request.GET.get('order_number')
   
    if order_number:
        if Order_table.objects.filter(order_number=order_number).exists():
            order = Order_table.objects.filter(order_number=order_number).first()
        else:
            return JsonResponse({
                'result':"failed: order number is not exist",
            })
    else :  
        return JsonResponse({
            'result':"failed: order_number is null",
        })
    
    if User_table.objects.filter(user_id=order.user_id).exists():
         user = User_table.objects.filter(user_id=order.user_id).first()
    else :
        return JsonResponse({
            'result':"failed: user is not exist",
        })

    city_code = str(user.user_address_code)

    return JsonResponse({
        'result':"success",
        'username':user.user_name,
        'phonenumber':user.user_tel,
        'requirement':order.order_type_number,
        'useraddress':user.user_address,
        'city':city_code
    })


