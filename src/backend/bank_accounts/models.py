from django.db import models
from django.contrib.auth.models import User
from currencies.models import Currency


# Create your models here.


class BankAccount(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    currency = models.ForeignKey(Currency, on_delete=models.CASCADE)
    name = models.CharField(max_length=128)
    initial_amount = models.PositiveIntegerField()

    def current_amount(self):
        total = self.initial_amount
        for transaction in self.transactions.all():
            total += transaction.amount
        return total
