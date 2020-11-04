from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, PlaceSerializer
from .models import Place


# Create your views here.
class PlaceViewSet(viewsets.ModelViewSet):
  queryset = Place.objects.all()
  serializer_class = PlaceSerializer

