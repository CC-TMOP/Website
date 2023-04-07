from django.http import JsonResponse
from demo.models.merchant.merchant_table import Merchant_table
from demo.models.order.order_table import Order_table

def PostMerchantToOrder(request):
    order_id = request.GET.get('order_id')
    merchant_id = request.GET.get('merchant_id')
    order_status = request.GET.get('order_status')

    order = Order_table(order_id = order_id, merchant_id = merchant_id, order_status = order_status)
    order.save()

    return JsonResponse({
        'result':"success"
    })





