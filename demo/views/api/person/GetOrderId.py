from django.http import JsonResponse
from demo.models.order.order_table import Order_table

UnFinished = 1

def GETOrderId(request):
    order = Order_table.objects.filter(order_status=UnFinished)
   
    orders = []
    for i in order:
        orders.append([i.order_id])

    return JsonResponse({
        'result':"success",
        'OrddersId':orders
    })



