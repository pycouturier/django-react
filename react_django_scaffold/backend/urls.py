from django.urls import path, include
from .views import list_persons

urlpatterns = [
    path('list/', list_persons, name='list_persons'),
]
