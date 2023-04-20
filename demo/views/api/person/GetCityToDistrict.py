from django.http import JsonResponse
from demo.models.area.city import City
from demo.models.area.district import District


def GetCityToDistrict(request):
    city_id = request.GET.get('citycode')

    if city_id:
        district = District.objects.filter(cityCode=city_id)

        # districts = [(o.code for o in district)]  #[(id,name)]
        # districts_name = [(o.name for o in district)]
        # total = zip(districts,districts_name)

        districts = []
        for i in range(len(district)):
            t = []
            t.append(district[i].code)
            t.append(district[i].name)
            districts.append(t)

        return JsonResponse({
            'result': "success",
            'districts': districts,
        })

    else:
        return JsonResponse({
            'result': "fail: city is not exist"
        })


# class A:
#     id = 0
#     name = ""
#     def __init__(self,_id,_name):
#         self.id=_id
#         self.name=_name

# if __name__ =="__main__":
#     a = [A(1,"aa"),A(2,"bb"),A(3,"cc"),A(4,"dd"),A(5,"ee")]
#     res = [[item.id, item.name] for item in a]
#     print(res)