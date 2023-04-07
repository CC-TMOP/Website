from django.http import JsonResponse
from demo.models.requirement.requirement_table import Requirement

# GET /api/requirements

def GetRequirements(request):
    # 获得所有需求
    requirements = Requirement.objects.filter()

    requirements_list = []
    for i in requirements:
        requirements_list.append([i.requirement_id,i.requirement_name,i.requirement_value])

    return JsonResponse({
        'result':"success",
        'requirements': requirements_list
    })



