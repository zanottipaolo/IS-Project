from django.db import models

from currencies.models import Currency
from bank_accounts.models import BankAccount
from categories.models import Category

# Create your models here.


class Transaction(models.Model):
    date = models.DateField()
    description = models.CharField(max_length=256)
    bank_account = models.ForeignKey(
        BankAccount, on_delete=models.CASCADE, related_name="transactions")
    currency = models.ForeignKey(Currency, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=7, decimal_places=2)
