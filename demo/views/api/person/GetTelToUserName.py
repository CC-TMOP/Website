from django.http import JsonResponse
from demo.models.user.user_table import User_table

def GetTelToUserName(request):
    user_tel = request.GET.get('user_tel')
   
    user = User_table.objects.filter(user_tel=user_tel).first()

    return JsonResponse({
        'result':"success",
        'user_name': user.user_name,
    })





