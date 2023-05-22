from django.urls import path
from . import views

app_name = 'base'

urlpatterns = [
    path('home/', views.home, name="home"),
    path('show/', views.show, name='show'),
    path('about/', views.about, name="about"),
    path('edit/', views.edit, name="edit"),
    path('check_existing/', views.check_existing, name="check_existing"),
    path('select/', views.select, name="select"),
    path('search/', views.getallstudents, name="search"),
    path('add/', views.add, name="add"),
    path('user_login/', views.user_login, name="login"),
]

