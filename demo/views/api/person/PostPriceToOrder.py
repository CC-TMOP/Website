from django.http import JsonResponse
from demo.models.merchant.merchant_table import Merchant_table
from demo.models.order.order_table import Order_table

def PostPriceToOrder(request):
    order_number = request.GET.get('order_number')
    merchant_id = request.GET.get('merchant_id')
    order_pay_type = request.GET.get('order_pay_type')
    order_status = request.GET.get('order_status')

    result = Order_table.objects.filter(order_number=order_number).update(
        merchant_id=merchant_id,
        order_pay_type = order_pay_type, 
        order_status = order_status
    )
    
    if(result==1):
        return JsonResponse({
            'result':"success"
        })
    else:
        return JsonResponse({
            'result':"failed"
        }) 