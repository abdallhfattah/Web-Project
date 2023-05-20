# Generated by Django 3.2.12 on 2023-05-19 21:33

from django.db import migrations


def create_departments(apps, schema_editor):
    Department = apps.get_model('base', 'Department')
    departments = ['IT', 'IS', 'DS', 'CS', 'AI']

    for department_name in departments:
        department = Department(name=department_name)
        department.save()

class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_alter_student_status'),
    ]

    operations = [
        migrations.RunPython(create_departments),
    ]
