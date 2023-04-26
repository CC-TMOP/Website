from django.http import JsonResponse
from demo.models.area.province import Province
from demo.models.area.city import City
from demo.models.area.district import District

# 获取省份信息
def getProvince(request):
    # 获取所有省份
    provinces = Province.objects.filter()
    res = []
    for i in provinces:
        res.append([i.code, i.name])
    return JsonResponse({"provinces":res})
# 获取市信息
def getCity(request):
    city_id = request.GET.get('city_id')
    # 获取当前省的所有市
    cities = City.objects.filter(provinceCode=city_id)
    res = []
    for i in cities:
        res.append([i.code, i.name])
    return JsonResponse({"cities":res})
# 获取县信息
def getDistrict(request):
    district_id = request.GET.get('district_id')
    # 获取当前市的所有县
    cities = District.objects.filter(cityCode=district_id)
    res = []
    for i in cities:
        res.append([i.code, i.name])
    return JsonResponse({'district': res})

# 获取街道信息
def getDistrict(request):
    district_id = request.GET.get('district_id')
    # 获取当前市的所有县
    cities = District.objects.filter(cityCode=district_id)
    res = []
    for i in cities:
        res.append([i.code, i.name])
    return JsonResponse({'district': res})
