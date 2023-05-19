from django.shortcuts import render
from django.http import HttpResponse

    
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import make_password
from django.urls import reverse
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_protect


def home(requst):
    return render(requst, 'home.html')


def index(request):
    return render(request, 'index.html')

def search(request):
    return render(request, 'search.html')


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


# TODO: add each attribute regarding the
def register(request):
    return render(request, 'register.html')


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
