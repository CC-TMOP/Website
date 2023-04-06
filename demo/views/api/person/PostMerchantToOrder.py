from django.http import JsonResponse
from demo.models.merchant.merchant import Merchant_table
from demo.models.order.order_table import Order_table

def PostMerchantToOrder(request):
    order_number = request.GET.get('order_number')
    merchant_id = request.GET.get('merchant_id')
    order_status = request.GET.get('order_status')

    order = Order_table(order_number = order_number, merchant_id = merchant_id, order_status = order_status)
    order.save()

    return JsonResponse({
        'result':"success"
    })





