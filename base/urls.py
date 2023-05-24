from django.urls import path
from . import views

app_name = 'base'

urlpatterns = [
    path('home/', views.home, name="home"),
    path('about/', views.about, name="about"),
    path('edit/', views.edit, name="edit"),
    path('search/', views.getallstudents2, name="search"),
    path('deactivate/<int:id>', views.deactivate),
    path('show/', views.getallstudents , name="show"),
    path('add/', views.add, name="add"),
    path('user_login/', views.user_login, name="login"),
    path('select/<int:id>/', views.select)

]

