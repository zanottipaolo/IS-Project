# Generated by Django 4.1.4 on 2023-01-13 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bank_accounts', '0004_bankaccount_currency_bankaccount_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='bankaccount',
            name='initial_amount',
            field=models.PositiveIntegerField(default=100),
            preserve_default=False,
        ),
    ]
