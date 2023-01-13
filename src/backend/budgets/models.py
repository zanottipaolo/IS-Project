from django.db import models
from django.contrib.auth.models import User
from categories.models import Category
# Create your models here.


class Budget(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=128)
    monthly_amount = models.DecimalField(max_digits=5, decimal_places=2)
