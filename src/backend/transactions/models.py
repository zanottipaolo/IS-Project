from django.db import models

from currencies.models import Currency
from bank_accounts.models import BankAccount

# Create your models here.


class Transaction(models.Model):
    date = models.DateField()
    bank_account = models.ForeignKey(BankAccount, on_delete=models.CASCADE)
    currency = models.ForeignKey(Currency, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=7, decimal_places=2)
