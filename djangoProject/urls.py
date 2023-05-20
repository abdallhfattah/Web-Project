"""
URL configuration for djangoProject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
# TODO : only this is going to be imported (home, logout, register, login )
# from base.views import home, logout, register, login
from base import views

urlpatterns = [
    path('',  views.index , name = 'index'),
    path('base/', include('base.urls')),
    path('admin/', admin.site.urls),
    path('add' , views.add),
    # path('login/', views.user_login, name='login'),
    # path('logout/', views.user_logout, name='logout'),
]

