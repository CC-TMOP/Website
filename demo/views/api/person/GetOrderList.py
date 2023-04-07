from django.http import JsonResponse
from demo.models.order.order_table import Order_table


def GETOrderList(request):
    order_status = request.GET.get('order_status')

    order = Order_table.objects.filter(order_status=order_status)

    order_ids = [o.order_id for o in order]

    return JsonResponse({
        'result':"success",
        'OrddersId':order_ids
    })



