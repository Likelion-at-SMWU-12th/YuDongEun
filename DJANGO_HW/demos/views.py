from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def week4HW(request):
    #return HttpResponse('view 구현해보기!')
    return render(request, 'week4HW.html')