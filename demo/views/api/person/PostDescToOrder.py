from django.http import JsonResponse
from demo.models.merchant.merchant_table import Merchant_table
from demo.models.order.order_table import Order_table

def PostDescToOrder(request):
    order_number = request.GET.get('order_number')
    order_desc = request.GET.get('order_desc')

    if order_number:
        result = Order_table.objects.filter(order_number=order_number).update(
            order_desc = order_desc
        )
    else:
        return JsonResponse({
            'result':"failed: order number is null"
        })
    
    if(result==1):
        return JsonResponse({
            'result':"success"
        })
    else:
        return JsonResponse({
            'result':"failed"
        }) 




