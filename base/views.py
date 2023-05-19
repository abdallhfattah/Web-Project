from django.shortcuts import render
from .models import student,Department
from django.http import HttpResponse
from django import http
from django.views.defaults import page_not_found


def home(requst):
    return render(requst,'home.html')

def custom_404_view(request, exception):
    return render(request, 'ErrorPage.html', status=404)

def index(request):
    return render(request,'index.html')

def show(requst):
    return render(requst,'show.html')

def getallstudents(request):
    Students = student.objects.all()
    gender = "Male"
    ischecked = "checked"
    return render(request,'show.html',{'students':Students , 'gender': gender , 'ischecked':ischecked})

def deactivate(request,id):
    Student = student.objects.get(stud_id=id)
    Student.status ^= True
    Student.save()
    return HttpResponse("Status changed successfully!")
def about(request):
    return render(request, 'about.html')



# Create your views here.
