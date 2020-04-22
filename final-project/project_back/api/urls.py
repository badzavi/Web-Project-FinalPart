from django.urls import path

from api.views.view_generic import CategoryListAPIView, CategoryDetailAPIView, \
                                    ProductListAPIView, ProductDetailAPIView

urlpatterns = [
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view()),
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:pk>', ProductDetailAPIView.as_view()),
]