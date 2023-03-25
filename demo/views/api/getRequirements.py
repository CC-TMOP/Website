from django.http import JsonResponse
from demo.models.requirement.requirement import Requirement

# GET /api/requirements

def getRequirements(request):
    # 获得所有需求
    requirements = Requirement.objects.filter()

    return JsonResponse({
        'requirement_id': requirements.requirement_id,
        'requirement_name': requirements.requirement_name,
        'requirement_value': requirement_value
    })



