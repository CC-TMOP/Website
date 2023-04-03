from django.http import JsonResponse
from demo.models.user.user_table import User_table

# GET /api/User_info

def GetUserInfo(request):
    user_tel = request.GET.get('user_tel')
    dry_run = request.GET.get('dry_run')
    if dry_run == 1:
        pass

    # 生成订单信息
    user = User_table.objects.filter(user_tel=user_tel)
    
    return JsonResponse({
        'user_name': user.user_name,
        'user.address':user.user_address,
        'merchant_name':merchant.merchant_name,
        'merchant_tel':merchant.merchant_tel,
        'result':"success"
    })


