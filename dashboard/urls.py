from django.urls import path
from . import views

urlpatterns = [

    path('', views.home, name='home'),

    path('operation-theatre-1/', views.operation_theatre1, name='operation_theatre1'),

]