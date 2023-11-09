from rest_framework import serializers
from .models import Skincare, SkincareProduct

class SkincareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skincare
        fields = ['id', 'name', 'description']

class SkincareProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkincareProduct
        fields = '__all__'

class SearchSerializer(serializers.Serializer):
    search_query = serializers.CharField(max_length=255, required=True)