from django.contrib.auth.models import User
from .models import Place
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class PlaceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Place
        fields = ['name', 'address', 'tag', 'neighborhood', 'instagram', 'open_time', 'close_time']