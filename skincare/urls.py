"""
URL configuration for skincare project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from skincare import views
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('skincare/', views.skincare_list),
    path('skincare/<int:product_id>/', views.skincare_detail, name = 'skincare_detail'),
    path('api/search/', views.search_view, name='search_view'),
    # path('app/', TemplateView.as_view(template_name='index.html')),
    path('skincare/names/', views.skincare_list_names, name='skincare_list_names'),
    path('salad_lib/', views.salad_lib, name='salad_lib'),
    path('farm_lib/', views.farm_lib, name='farm_lib'),
    path('soup_lib/', views.soup_lib, name='soup_lib'),
    path('skincare-products/', views.search_view, name='get_skincare_products'),
    path('', TemplateView.as_view(template_name='index.html')),
]
