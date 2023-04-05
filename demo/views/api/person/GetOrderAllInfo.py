from django.http import JsonResponse
from demo.models.merchant.merchant import Merchant_table
from demo.models.order.order_table import Order_table
from demo.models.

def PostMerchantToOrder(request):
    order_id = request.GET.get('order_id')
  
    order = Order_table.objects.filter(order_status=UnFinished)
    user = 
    orders = []
    for i in order:
        orders.append([i.order_number])

    return JsonResponse({
        'result':"success"
    })





