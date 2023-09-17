from rest_framework import serializers
from .models import Skincare

class SkincareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skincare
        fields = ['id', 'name', 'description']