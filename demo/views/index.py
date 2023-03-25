from django.shortcuts import render
from django.http import JsonResponse

def index(request):
    return render(request, "index.html")

def area(request):
    return render(request, "area.html")

def merchant(request):
    return render(request, "Merchant_Page.html")