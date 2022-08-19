from django.contrib import admin
from django.urls import path, include
from producto.views import Store, ProductDetail, CreateProduct, ProductList, UpdateProduct, DeleteProduct, Index
from django.conf import settings
from django.conf.urls.static import static
from user import views as user_view
from django.contrib.auth import views as auth

urlpatterns = [
    path('', Index.as_view()),
    path('admin/', admin.site.urls),
    path('product-detail/<slug:pk>', ProductDetail.as_view()),
    path('create-product/', CreateProduct.as_view()),
    path('product-list/', ProductList.as_view(), name='product-list'),
    path('update-product/<int:pk>', UpdateProduct.as_view()),
    path('delete-product/<slug:pk>', DeleteProduct.as_view()),

    #Store view
    path('store/', Store.as_view()),

    ##### user related path##########################
    path('', include('user.urls')),
    path('login/', user_view.Login, name ='login'),
    path('logout/', auth.LogoutView.as_view(template_name ='templates/index.html'), name ='logout'),
    path('register/', user_view.register, name ='register'),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
