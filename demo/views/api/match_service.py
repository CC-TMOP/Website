from django.http import JsonResponse
from demo.models.merchant.merchant_table import Merchant_table
from django.db.models import Q

def matchService(request):
    str_code = request.GET.get('code')
    # str_code = "010111010100000101"
    VOT = int(str_code[:2])
    TYPE = int(str_code[2:4])
    district_id = int(str_code[4:10])
    dis_uid = int(str_code[10:16])
    need_id = int(str_code[16:18])
    res = []
    if VOT == 1 and TYPE == 1:
        merchant = Merchant_table.objects.filter(Q(block=district_id)&Q(service_type=need_id))
        for i in merchant:
            res.append([i.merchant_name, i.merchant_id])
        return JsonResponse({"result":res})
    return JsonResponse({"result":"查找不到相应结果"})
    