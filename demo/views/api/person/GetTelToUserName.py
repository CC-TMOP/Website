from django.http import JsonResponse
from demo.models.user.user_table import User_table

def GetTelToUserName(request):
    user_tel = request.GET.get('phonenumber')
   
    user = User_table.objects.filter(user_tel=user_tel)

    return JsonResponse({
        'result':"success",
        'merchant_phonenumber': user.user_name
    })





