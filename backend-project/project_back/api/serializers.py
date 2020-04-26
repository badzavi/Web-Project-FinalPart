from rest_framework import serializers

from api.models import Category, Product, Comment
from django.contrib.auth.models import User

class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    img = serializers.CharField()

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.img = validated_data.get('img', instance.img)
        instance.save()
        return instance

class CategoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'img']

class UserSerializer(serializers.ModelSerializer):
    # is_staff = serializers.BooleanField(write_only=True)
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'is_superuser', 'password']
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class SuperUserSerializer(UserSerializer):
    def create(self, validated_data):
        user = User.objects.create_superuser(**validated_data)
        return user

class CommentSerializer(serializers.ModelSerializer):
    product_id = serializers.IntegerField()
    created_by = UserSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = ['id', 'created_date', 'content', 'product_id', 'created_by']


class ProductModelSerializer(serializers.ModelSerializer):
    # category_id = serializers.IntegerField(read_only=True)
    comments = CommentSerializer(many=True, read_only=True)
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'img', 'category_id', 'comments']

class ProductSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'img']

class CategoryWithProductsSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ['id', 'name', 'img', 'products']
