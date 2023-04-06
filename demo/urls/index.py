from django.urls import path, include
from demo.views.index import index
from demo.views.index import area
from demo.views.index import merchant
# 不用深究urls的路由代码，会用即可
urlpatterns = [ 
    path("",index,name="index"),
    path("merchant/area",area,name="area"),
    path("merchant/",merchant,name="merchant"),
    path("api/",include("demo.urls.api.index")),
    
]
