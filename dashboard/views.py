from django.shortcuts import render

def home(request):
    return render(request,'dashboard/home.html')

def operation_theatre1(request):
    return render(request,'dashboard/operation_theatre1.html')