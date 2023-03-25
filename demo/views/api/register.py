from django.http import JsonResponse
from django.contrib.auth import authenticate,login
from django.contrib.auth.models import User
from demo.models.merchant.merchant import Merchant_table
from django.db.models import F
import random
import hashlib


def register(request):
    data = request.GET
    username = data.get("username")
    password = data.get("password")
    password_confirm = data.get("password_confirm")
    # print(username,'\n',password,'\n',password_confirm)
    if not username or not password :
        return JsonResponse({
             'result':"用户名和密码不能为空"
        })
    if password != password_confirm:
        return JsonResponse({
            'result':"两个密码不相同"
        })
    if Merchant_table.objects.filter(merchant_name=username).exists():
        return JsonResponse({
            'result':"用户名已存在"
        })
        
    block_test = 110000000
    total = random.randint(1, 1000000000) + block_test * 1000000000
    encrypt = hashlib.md5()    # 将密码进行MD5加密
    encrypt.update(password.encode(encoding='utf-8'))
    password = encrypt.hexdigest()
    print(password)
    user=Merchant_table(merchant_id = total,merchant_name=username,merchant_password=password,block=block_test)
    user.save()

    # login(request,user)
    return JsonResponse({
        'result':"success"
    })
