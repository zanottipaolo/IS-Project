from django.db import models

# Create your models here.


class Currency(models.Model):
    name = models.CharField(max_length=32)
    symbol = models.CharField(max_length=1)
