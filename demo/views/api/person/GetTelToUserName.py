from django.http import JsonResponse
from demo.models.user.user_table import User_table

def GetTelToUserName(request):
    user_tel = request.GET.get('user_tel')
   
    if user_tel:
        if User_table.objects.filter(user_tel=user_tel).exists():
            user = User_table.objects.filter(user_tel=user_tel).first()
        else: 
             return JsonResponse({
                'result':"failed: user is not exist",
            })
    else:
        return JsonResponse({
            'result':"failed: user telphone is null"
        })

    return JsonResponse({
        'result':"success",
        'user_name': user.user_name,
    })





