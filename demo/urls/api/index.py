from django.urls import path, include
from demo.views.api.getArea import *
from demo.views.api.login import signin
from demo.views.api.register import register
from demo.views.api.match_service import matchService

urlpatterns = [
    path("getProvince/",getProvince,name="getProvince"),
    path("getCity/",getCity,name="getCity"),
    path("getDistrict/",getDistrict,name="getDistrict"),
    path("login/",signin,name="login"),
    path("register/",register,name="register"),
    path("match/",matchService,name="matchService"),
    path("person/",include("demo.urls.api.person.index")),
]
