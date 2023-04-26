from django.http import JsonResponse
from demo.models.area.city import City
from demo.models.area.district import District
from demo.models.area.street import Street
from demo.models.merchant.merchant_table import Merchant_table
from demo.models.order.order_table import Order_table


def GetDistrictToMerchant(request):
    districtcode = request.GET.get('districtcode')
    order_number = request.GET.get("order_number")

    if districtcode:
        order = Order_table.objects.filter(order_number=order_number).first()

        merchant = Merchant_table.objects.filter(merchant_address_code = districtcode)

        # districts = [(o.code for o in district)]  #[(id,name)]    
        # districts_name = [(o.name for o in district)]
        # total = zip(districts,districts_name)
        requiremernt_id = str(order.order_number)[20:21] 
        print(requiremernt_id)

        merchants = []
        for i in range(len(merchant)):
            if merchant[i].service_type == int(requiremernt_id): 
                t = []
                t.append(merchant[i].merchant_id)
                t.append(merchant[i].merchant_name)
                merchants.append(t)

        return JsonResponse({
            'result': "success",
            'districts': merchants,
        })

    else:
        return JsonResponse({
            'result': "fail: district or order is null"
        })
