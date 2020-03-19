from django.db import models

# Create your models here.
class Person(models.Model):
    name = models.CharField(max_length=200)
    birthdate = models.DateField('BirthDate')

    
class Skill(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    skill = models.CharField(max_length=200)
    level = models.IntegerField(default=0)