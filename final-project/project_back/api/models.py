from django.db import models

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
    img =models.TextField(default='')
    category = models.ForeignKey(Category, on_delete=models.CASCADE,
                                 related_name='products')

    def __str__(self):
        return f'Product id={self.id}, name={self.name}'