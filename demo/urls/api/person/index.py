from django.urls import path, include
from demo.views.api.person.GetMerchantNameToTel import GetMerchantNameToTel
from demo.views.api.person.GetOrderId import GetOrderId
from demo.views.api.person.GetOrderIdToInfo import GetOrderIdToInfo
from demo.views.api.person.GetOrderList import GetOrderList
from demo.views.api.person.GetRequirements import GetRequirements
from demo.views.api.person.GetTelToUserName import GetTelToUserName
from demo.views.api.person.PostOrderinfo import PostOrderinfo
from demo.views.api.person.GetOrderNumber import getOrderNumber
from demo.views.api.person.PostMerchantToOrder import PostMerchantToOrder
from demo.views.api.person.GetOrderAllInfo import GetOrderAllInfo
from demo.views.api.person.PostMerchantToOrder import PostMerchantToOrder

urlpatterns = [
    path("getMerchantNameToTel/",GetMerchantNameToTel,name="GetMerchantNameToTel"),
    path("getOrderId/",GetOrderId,name="GetOrderId"),
    path("getOrderIdToInfo/",GetOrderIdToInfo,name="GetOrderIdToInfo"),
    path("getOrderList/",GetOrderList,name="GetOrderList"),
    path("getRequirements/",GetRequirements,name="GetRequirements"),
    path("getTelToUserName/",GetTelToUserName,name="GetTelToUserName"),
    path("postOrderinfo/",PostOrderinfo,name="PostOrderinfo"),
    path("getOrderNumber/",getOrderNumber,name="getOrderNumber"),
    path("postMerchantToOrder/",PostMerchantToOrder,name="PostMerchantToOrder"),
    path("getOrderAllInfo/",GetOrderAllInfo,name="GetOrderAllInfo"),
    path("postMerchantToOrder/",PostMerchantToOrder,name="PostMerchantToOrder"),
]
