from django.http import JsonResponse
from demo.models.order.order_table import Order_table

UnFinished = 1

def GETOrderId(request):
    order_status = request.GET.get('Order_status')
   
    order = Order_table.objects.filter(order_status=order_status)

    orders = []
    for i in order:
        orders.append([i.order_number])

    return JsonResponse({
        'result':"success",
        'OrddersId':orders
    })



