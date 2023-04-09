from django.http import JsonResponse
from demo.models.merchant.merchant_table import Merchant_table

def GetMerchantNameToTel(request):
    merchant_id = request.GET.get('merchant_id')
   
    if merchant_id:
        merchant = Merchant_table.objects.filter(merchant_id=merchant_id).first()
    else:
        return JsonResponse({
            'result':"fail: merchant is null",
        })

    return JsonResponse({
        'result':"success",
        'merchant_phonenumber': merchant.merchant_tel
    })





