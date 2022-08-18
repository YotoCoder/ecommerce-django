from django.shortcuts import render
from django.views.generic import TemplateView, DetailView, CreateView, ListView, DeleteView, UpdateView
from .models import Producto
from .forms import ProductForm

# Create your views here.

class Index(ListView):
    model = Producto
    template_name = 'templates/index.html'

class DeleteProduct(DeleteView):
    model = Producto
    template_name = 'templates/producto/delete_product.html'
    success_url = '/product-list'

class UpdateProduct(UpdateView):
    model = Producto
    template_name = 'templates/producto/update_product.html'
    success_url = '/product-list'
    fields = '__all__'

class ProductList(ListView):
    model = Producto
    template_name = 'templates/producto/product_list.html'
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['headlines'] = self.model._meta.get_fields()
        return context
        

class ProductDetail(DetailView):

    model = Producto
    template_name = 'templates/producto/product_detail.html'


class CreateProduct(CreateView):

    model = Producto
    
    fields = '__all__'

    template_name = 'templates/producto/create_product.html'
    success_url = '/product-list'

    class Meta:
        form = ProductForm