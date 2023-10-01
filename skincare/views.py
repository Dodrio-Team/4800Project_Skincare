from django.http import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from .models import Skincare
from .serializers import SkincareSerializer
from lxml import html
import requests
# import pymongo

# client = pymongo.MongoClient('mongodb+srv://tiffmt817:wuY6YUnQKkmkW4eR@tiff.qoiollp.mongodb.net/?retryWrites=true&w=majority')

# #Define Db Name
# dbname = client['skincare']

# #Define Collection
# collection = dbname['products']

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

def skincare_list_names(request):
    # Get all the skincare products
    products = Skincare.objects.all()

    # Extract the names from the products
    product_names = [product.name for product in products]

    # Return the names as JSON
    return JsonResponse({'skincare_product_names': product_names})

def salad_lib(request):
    # define the URL of the website you want to scrape
    url = 'https://github.com/Dodrio-Team/4800Project_Skincare'  

    # Send an HTTP GET request to the URL
    response = requests.get(url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the HTML content of the page using lxml
        tree = html.fromstring(response.text)

        # You can use XPath to locate specific elements on the page
        # In this case, we'll just return "Hello, World!"
        hello_world = "Hello, World!"

        return HttpResponse(hello_world)
    else:
        return HttpResponse("Failed to retrieve the web page.")

def farm_lib(request):
    # define the URL of the website you want to scrape
    url = 'https://github.com/Dodrio-Team/4800Project_Skincare'  

    # Send an HTTP GET request to the URL
    response = requests.get(url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse the HTML content of the page using lxml
        tree = html.fromstring(response.text)

        # You can use XPath to locate specific elements on the page
        # In this case, we'll just return "Hello, World!"
        new_text = "our team is dodrio hehe"

        return HttpResponse(new_text)
    else:
        return HttpResponse("Failed to retrieve the web page.")
    
def soup_lib(request):

    url = 'https://github.com/Dodrio-Team/4800Project_Skincare'  

    response = requests.get(url)

    if response.status_code == 200:

        tree = html.fromstring(response.text)

        nmsgs = "Wow it actually worked"

        return HttpResponse(nmsgs)
    else:
        return HttpResponse("Failed to retrieve the web page.")