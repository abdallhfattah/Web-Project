from django.shortcuts import render
from django.http import HttpResponse
def home(requst):
    return render(requst,'home.html')

def index(request):
    return render(request,'index.html')

def search(request):
    return render(request, 'search.html')


# Create your views here.
