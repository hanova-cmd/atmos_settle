from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('missions/', views.missions, name='missions'),
    path('competition/', views.competition, name='competition'),
    path('contact/', views.contact, name='contact'),
    path('models/', views.models_gallery, name='models'),
]