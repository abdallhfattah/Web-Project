from django.urls import path
from . import views
<<<<<<< HEAD

app_name = 'base'

urlpatterns = [
    path('home/', views.home, name="home"),
    path('show/', views.show, name='show'),
    path('about/', views.about, name="about"),
    path('edit/', views.edit, name="edit"),
    path('search/', views.search, name="search"),
    path('select/', views.select, name="select"),
    path('register/', views.register, name="add"),
    path('user_login/', views.user_login, name="login"),
]
=======
urlpatterns=[
    path('',views.index,name="index"),
    path('home/',views.home,name="home"),
    path('search/',views.search ,name="search")
]
>>>>>>> master
