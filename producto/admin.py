from itertools import product
from django.contrib import admin
from .models import Category, Producto

# Register your models here.

admin.site.register(Producto)
admin.site.register(Category)