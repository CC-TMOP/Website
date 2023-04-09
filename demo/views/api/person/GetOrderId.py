from django.http import JsonResponse
from demo.models.order.order_table import Order_table

UnFinished = 1

def GetOrderId(request):
    order = Order_table.objects.filter(order_status=UnFinished)
   
    orders = []
    for i in order:
        orders.append([i.order_number])

    return JsonResponse({
        'result':"success",
        'OrddersId':orders
    })



