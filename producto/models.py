from distutils.command.upload import upload
from importlib.metadata import requires
from random import choices
from secrets import choice
from unicodedata import category
from django.db import models

stars = ( 
    (1, 1), 
    (2, 2), 
    (3, 3), 
    (4, 4), 
    (5, 5),
) 

class Category(models.Model):
    name = models.CharField(max_length=30)
   
    def __str__(self):
        return self.name

class Producto(models.Model):
    name = models.CharField(max_length=30)
    price = models.FloatField()
    description = models.CharField(max_length=500, blank=True, null=True, default='')
    code = models.CharField(max_length=50, blank=True, null=True, default='')
    color = models.CharField(max_length=30, blank=True, null=True, default='')
    img = models.ImageField(upload_to='img/productos/', blank=True, null=True, default='')
    in_stock = models.IntegerField(default=1)
    
    category = models.ManyToManyField(Category)

    def __str__(self):
        return self.name