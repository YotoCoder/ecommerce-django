from django.shortcuts import render
from django.views.generic import TemplateView, DetailView, CreateView, ListView, DeleteView, UpdateView
from .models import Producto
from .forms import ProductForm

from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
# Create your views here.

class StaffRequiredMixin(LoginRequiredMixin, UserPassesTestMixin):

    def test_func(self):
        return self.request.user.is_staff

class Index(ListView):
    model = Producto
    template_name = 'templates/index.html'
  

class ProductDetail(DetailView):
    model = Producto
    template_name = 'templates/producto/product_detail.html'

class ProductList(StaffRequiredMixin, ListView):
    model = Producto
    template_name = 'templates/producto/product_list.html'
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['headlines'] = self.model._meta.get_fields()
        return context

class DeleteProduct(StaffRequiredMixin, DeleteView):
    model = Producto
    template_name = 'templates/producto/delete_product.html'
    success_url = '/product-list'

class UpdateProduct(StaffRequiredMixin, UpdateView):
    model = Producto
    template_name = 'templates/producto/update_product.html'
    success_url = '/product-list'
    fields = '__all__'

# LoginRequiredMixin,
class CreateProduct(StaffRequiredMixin, CreateView):

    model = Producto
    
    fields = '__all__'

    template_name = 'templates/producto/create_product.html'
    success_url = '/product-list'

    class Meta:
        form = ProductForm

class Store(ListView):
    model = Producto
    template_name = 'templates/store.html'

    paginate_by = 6