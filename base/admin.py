from django.contrib import admin
from .models import student,Department,UserAdmin

# Register your models here.
admin.site.register(student)
admin.site.register(Department)
admin.site.register(UserAdmin)
