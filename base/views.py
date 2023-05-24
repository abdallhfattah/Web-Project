from django.shortcuts import render,redirect
from django.http import HttpResponse


from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import make_password
from django.urls import reverse
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_protect

from .models import student,Department,UserAdmin


def home(requst):
    return render(requst, 'home.html')


def index(request):
    return render(request, 'index.html')

def search(request):
    return render(request, 'search.html')


def show(requst):
    return render(requst,'show.html')

def getallstudents(request):
    Students = student.objects.all()
    gender = "Male"
    ischecked = "checked"
    return render(request,'show.html',{'students':Students , 'gender': gender , 'ischecked':ischecked})

def getallstudents2(request):
    Students = student.objects.all()
    gender = "Male"
    ischecked = "checked"
    return render(request,'search.html',{'students':Students , 'gender': gender , 'ischecked':ischecked})

def deactivate(request,id):
    Student = student.objects.get(stud_id=id)
    Student.status ^= True
    Student.save()
    return HttpResponse("Status changed successfully!")
def about(request):
   
    return render(request, 'about.html')



def edit(request):
    return render(request, 'edit.html')


def select(req, id):
    return render(req, "search.html")



def page_not_found(request, exception):
    return render(request, 'ErrorPage.html', status=404)

@login_required
def add(request):
    if request.method == 'POST':
        # Retrieve form data
        stud_id = request.POST['stud_id']
        stud_name = request.POST['stud_name']
        stud_gpa = request.POST['stud_gpa']
        date_of_birth = request.POST['date_of_birth']
        gender = request.POST['gender']
        status = request.POST['status']
        level = request.POST['level']
        email = request.POST['email']
        mobile_number = request.POST['mobile_number']
        department = request.POST['department']

        # Create a new instance of the student model
        new_student = student(
            stud_id=stud_id,
            stud_name=stud_name,
            stud_gpa=stud_gpa,
            dateOfBirth=date_of_birth,
            gender=gender,
            status=status,
            level=level,
            email=email,
            mobileNumber=mobile_number,
            department=department
        )
        new_student.save()

        return redirect('add')

    return render(request, 'add.html')

@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))



@csrf_protect
def user_login(request):

    if request.method == "POST":

        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user:
            if user.is_active:
                login(request, user)
                print("login successful for Username: {}".format(username))
                return HttpResponseRedirect(reverse('base:home'))
            else:
                return HttpResponse("Account not active :D")
        else:
            print("some one tried to open with this\n")
            print("Username: {} and password: {}".format(username, password))
            return HttpResponse("invalid login details")

    return render(request, 'login.html')

def select(request,id):
    Student = student.objects.get(stud_id=id)
    if request.method == 'GET':
        return render(request, 'select.html',{'student':Student})
    Student.department = Department.objects.get(name=request.POST.get("department"))
    Student.save()
    return redirect("base:search")
