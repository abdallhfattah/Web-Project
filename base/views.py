from django.shortcuts import render, redirect
from base.models import Student, Department
from django.http import HttpResponse


from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import make_password
from django.urls import reverse
from django.contrib import messages
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_protect
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.shortcuts import get_object_or_404



def home(requst):
    return render(requst, 'home.html')

def index(request):
    return render(request, 'index.html')


def search(request):
    return render(request, 'search.html')


def about(request):
    return render(request, 'about.html')


def show(request):
    return render(request, 'show.html')


def edit(request):
    return render(request, 'edit.html')


def select(request):
    return render(request, 'select.html')


@require_POST
def check_exists(request):
    field = request.POST.get('field')
    value = request.POST.get('value')

    # Check the specified field for existence in the Student model
    if field == 'id':
        exists = Student.objects.filter(stud_id=value).exists()
    elif field == 'email':
        exists = Student.objects.filter(email=value).exists()
    elif field == 'phone':
        exists = Student.objects.filter(mobileNumber=value).exists()
    else:
        # Invalid field name provided
        return JsonResponse({'exists': False, 'error': 'Invalid field name'})

    # Return the response as JSON
    return JsonResponse({'exists': exists})


@login_required
def add(request):
    if request.method == 'POST':
        # Retrieve form data
        email = request.POST[ 'email']
        stud_id = request.POST['stud_id']
        mobile_number = request.POST['mobile_number']
        name = request.POST['stud_name']
        stud_gpa = request.POST['stud_gpa']
        date_of_birth = request.POST['date_of_birth']
        stud_gender = request.POST['gender']
        status = request.POST['status']
        stud_level = request.POST['level']
        department_name = request.POST['department']

        student_status = False
        if status == "act":
            student_status = True
        

        # print(email + "\n " + stud_id+ "\n " + mobile_number+ "\n " + name+ "\n " + 
        #       stud_gpa+ "\n " + date_of_birth+ "\n " + stud_gender+"\n "+ 
        #       status+"\n " + stud_level+ "\n " + department_name)
        # Get the Department instance based on the selected department name
        
        stud_department = Department.objects.get(name=department_name)

        if Student.objects.filter(stud_id=stud_id).exists():
            # ID already exists
            messages.error(request, 'This ID already exists.')

        elif Student.objects.filter(email=email).exists():
            # Email already exists
            messages.error(request, 'This email already exists.')

        elif Student.objects.filter(mobileNumber= mobile_number).exists():
            # Phone number already exists
            messages.error(request, 'This phone number already exists.')

        else:
            # Create a new instance of the Student model
            print("i have added Student {} ".format(name))
            new_student = Student(
            stud_id=stud_id,
            email=email,
            mobileNumber=mobile_number,
            stud_name=name,
            stud_gpa=stud_gpa,
            dateOfBirth=date_of_birth,
            gender=stud_gender,
            status=student_status,
            level=stud_level,
            department=stud_department
        )
        new_student.save()
        success = 'Student added Successfully ID : {} '.format(stud_id)

        return HttpResponse(success)

    return render(request, 'add.html')

# @csrf_protect
# @login_required 
# def add(request):

#     if request.method == 'POST':
#         id_value = request.POST.get('stud_id')
#         email_value = request.POST.get('email')
#         phone_value = request.POST.get('mobile_number')

#         stud_name = request.POST.get('stud_nam')
#         stud_gpa = request.POST.get('stud_gpa')
#         date_of_birth = request.POST.get('date_of_birth')
#         gender = request.POST.get('gender')
#         status = request.POST.get('status')
#         level = request.POST.get('level')
#         department = request.POST.get('department')
#         # print(department_name)
#         # Get the Department instance based on the selected department name
#         # department = Department.objects.get(name=department_name)
#         print("\n\n\n\n\n" + department + "\n\n\n\n")
#         # Check if ID, email, and phone number already exist in the database
#         if student.objects.filter(stud_id=id_value).exists():
#             # ID already exists
#             messages.error(request, 'This ID already exists.')

#         elif student.objects.filter(email=email_value).exists():
#             # Email already exists
#             messages.error(request, 'This email already exists.')

#         elif student.objects.filter(mobileNumber=phone_value).exists():
#             # Phone number already exists
#             messages.error(request, 'This phone number already exists.')

#         else:
#             act_value = request.POST.get('act', False)
#             # All fields are unique, save the student record
#             new_student = student(
#                 stud_id=id_value,
#                 email=email_value,
#                 mobileNumber=phone_value,
#                 stud_name=stud_name,
#                 stud_gpa=stud_gpa,
#                 dateOfBirth=date_of_birth,
#                 gender=gender,
#                 status=status,
#                 level=level,
#                 department=department,
#                 act =act_value,
#             )
#             new_student.save()
#             print('added {} into the data base' .format(id_value))
#             # Show success message
#             messages.success(request, 'Student added successfully.')
#             return redirect('add')

#     return render(request, 'add.html')


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
