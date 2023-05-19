from django.urls import path
from . import views
urlpatterns=[
    path('',views.index,name="index"),
    path('home/',views.home,name="home"),
    path('show/', views.getallstudents),
    path('deactivate/<int:id>', views.deactivate),
    path('about/', views.about, name="about"),

]