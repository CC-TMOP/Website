from django.http import JsonResponse
from demo.models.order.order_table import Order_table

UnFinished = 1

def GetOrderId(request):
    order = Order_table.objects.filter(order_status=UnFinished)
   
    order_numbers = [o.order_number for o in order]

    return JsonResponse({
        'result':"success",
        'OrddersId':order_numbers
    })



