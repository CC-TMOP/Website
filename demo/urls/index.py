from django.urls import path, include
from demo.views.index import index
# 不用深究urls的路由代码，会用即可
urlpatterns = [ 
    path("",index,name="index"),
]
