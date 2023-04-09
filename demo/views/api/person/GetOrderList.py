from django.http import JsonResponse
from demo.models.order.order_table import Order_table


def GetOrderList(request):
    order_status = request.GET.get('order_status')

    order = Order_table.objects.filter(order_status=order_status)

    order_numbers = [o.order_number for o in order]

    return JsonResponse({
        'result':"success",
        'OrddersId':order_numbers
    })



