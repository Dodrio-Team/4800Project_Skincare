from django.http import JsonResponse
from .models import Skincare
from .serializers import SkincareSerializer

# first HTTP API - GET request
def skincare_list(request):

    # get all the skincare products
    # serialize them 
    # return json
    products = Skincare.objects.all()
    serializer = SkincareSerializer(products, many=True)
    return JsonResponse({'skincare_products': serializer.data})