from ssl import Options
from django import forms
from .models import Producto

class ProductForm(forms.ModelForm):
    
    class Meta:
        model = Producto

        fields = ['price', 'description', 'img', 'in_stock', 'category']
        