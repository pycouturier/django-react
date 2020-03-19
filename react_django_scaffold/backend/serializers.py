from rest_framework import serializers
from .models import Person, Skill


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'person', 'level']


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'name', 'birthdate', 'skill_set']
        depth=1
        
        
