from django.urls import path

from api.views.view_generic import CategoryListAPIView, CategoryDetailAPIView, \
                                    ProductListAPIView, ProductDetailAPIView, \
                                    CommentListAPIView, CommentDetailAPIView, UserCommentsListAPIView
from api.views.auth import UserListAPIVIew,UserDetailAPIView, SuperUserListAPIView, SuperUserDetailListAPIView

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('users/', UserListAPIVIew.as_view()),
    path('users/<int:pk>', UserDetailAPIView.as_view()),
    path('users/<int:pk>/comments', UserCommentsListAPIView.as_view()),
    path('super/users/', SuperUserListAPIView.as_view()),
    path('super/users/<int:pk>', SuperUserDetailListAPIView.as_view()),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:pk>', CategoryDetailAPIView.as_view()),
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:pk>', ProductDetailAPIView.as_view()),
    path('comments/', CommentListAPIView.as_view()),
    path('comments/<int:pk>', CommentDetailAPIView.as_view()),
]