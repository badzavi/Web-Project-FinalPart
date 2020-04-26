from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now
import datetime
# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=300)
    img = models.TextField(default='')

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

class Product(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default='')
    price = models.FloatField(default=0)
    img = models.TextField(default='')
    category = models.ForeignKey(Category, on_delete=models.CASCADE,
                                 related_name='products', null=True)

    def __str__(self):
        return f'Product id={self.id}, name={self.name}'

class CommentManager(models.Manager):
    def for_user(self, user):
        return self.filter(created_by=user)

class Comment(models.Model):
    created_date = models.DateTimeField(default=now)
    content = models.TextField(default='')
    product = models.ForeignKey(Product, on_delete=models.CASCADE,
                                related_name='comments')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, default=None, null=True,
                                   related_name='comments')

    objects = CommentManager()