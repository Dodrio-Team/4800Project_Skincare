from django.db import models

class Skincare(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500) 
    
    def __str__(self):
        return self.name + ' ' + self.description
    
class SkincareProduct(models.Model):
    label = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rank = models.FloatField()
    ingredients = models.TextField()
    combination = models.BooleanField(default=False)
    dry = models.BooleanField(default=False)
    normal = models.BooleanField(default=False)
    oily = models.BooleanField(default=False)
    sensitive = models.BooleanField(default=False)

    def __str__(self):
        return self.name