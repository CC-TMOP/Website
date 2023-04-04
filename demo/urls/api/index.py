from django.urls import path, include
from demo.views.api.template.getArea import *
from demo.views.api.template.login import signin
from demo.views.api.template.register import register
from demo.views.api.match_service import matchService

urlpatterns = [
    path("getProvince/",getProvince,name="getProvince"),
    path("getCity/",getCity,name="getCity"),
    path("getDistrict/",getDistrict,name="getDistrict"),
    path("login/",signin,name="login"),
    path("register/",register,name="register"),
    path("match/",matchService,name="matchService"),
    
]
