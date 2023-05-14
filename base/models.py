from django.db import models

# Create your models here.
class Department(models.Model):
    name = models.CharField(max_length=50,primary_key=True)

    def __str__(self):
        return self.name


class student(models.Model):
    stud_id = models.IntegerField(unique=True)
    stud_name = models.CharField(max_length=255)
    stud_gpa = models.DecimalField(max_digits=3, decimal_places=2)
    dateOfBirth = models.DateField()
    gender = models.CharField(max_length=7)
    status = models.BooleanField(),
    level = models.CharField(max_length=1)
    email = models.CharField(max_length=255)
    mobileNumber = models.CharField(max_length=12)
    department = models.ForeignKey(Department, models.SET_NULL,null=True)


    def __str__(self):
        return self.stud_name

    def __repr__(self):
        return self.stud_name




