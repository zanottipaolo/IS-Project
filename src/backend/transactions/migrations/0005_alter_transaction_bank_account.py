# Generated by Django 4.1.4 on 2023-01-13 08:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bank_accounts', '0005_bankaccount_initial_amount'),
        ('transactions', '0004_transaction_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='bank_account',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transactions', to='bank_accounts.bankaccount'),
        ),
    ]
