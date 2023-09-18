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

# Retrieve and return info based on ID
def skincare_detail(request, product_id):
    try:
        product = Skincare.objects.get(pk=product_id)
    except Skincare.DoesNotExist:
        return JsonResponse({'error': 'Skincare product not found'}, status=404)

    serializer = SkincareSerializer(product)
    return JsonResponse({'skincare_product': serializer.data})