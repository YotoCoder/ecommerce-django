from django.contrib import admin
from django.urls import path, include
from producto.views import ProductDetail, CreateProduct, ProductList, UpdateProduct, DeleteProduct, Index
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', Index.as_view()),
    path('admin/', admin.site.urls),
    path('product-detail/<slug:pk>', ProductDetail.as_view()),
    path('create-product', CreateProduct.as_view()),
    path('product-list', ProductList.as_view(), name='product-list'),
    path('update-product/<int:pk>', UpdateProduct.as_view()),
    path('delete-product/<slug:pk>', DeleteProduct.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
