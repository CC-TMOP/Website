from django.http import JsonResponse
from demo.models.merchant.merchant import Merchant_table
from demo.models.order.order_table import Order_table

def PostMerchantToOrder(request):
    order_id = request.GET.get('order_id')
    order_desc = request.GET.get('order_desc')

    order = Order_table(order_id = order_id, order_desc = order_desc)
    order.save()

    return JsonResponse({
        'result':"success"
    })





