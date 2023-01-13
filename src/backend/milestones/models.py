from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Milestone(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.CharField(max_length=128)
    due_date = models.DateField()
    amount = models.DecimalField(max_digits=9, decimal_places=2)
    monthly_saving = models.DecimalField(max_digits=5, decimal_places=2)
