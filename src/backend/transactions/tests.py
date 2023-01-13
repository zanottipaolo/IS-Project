from django.test import TestCase

from datetime import date

# Models
from .models import Transaction
from bank_accounts.models import BankAccount
from currencies.models import Currency
from categories.models import Category
from django.contrib.auth.models import User

# Rest framework
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

# Create your tests here.


class TransactionTestCase(TestCase):
    def setUp(self):
        self.username = "test"
        self.password = "test1234"

        self.second_username = "test2",
        self.second_password = "test21234"

        # create users
        self.user = User.objects.create_user(
            username=self.username, password=self.password)
        self.user2 = User.objects.create_user(
            username=self.second_username, password=self.second_password)

        # create currency
        self.currency = Currency.objects.create(name="euro", symbol="€")

        # create bank accounts
        self.bankAccount = BankAccount.objects.create(
            owner=self.user,
            currency=self.currency,
            initial_amount=100,
        )
        self.bankAccount2 = BankAccount.objects.create(
            owner=self.user2,
            currency=self.currency,
            initial_amount=500,
        )

        # create categories
        self.category = Category.objects.create(
            owner=self.user, name="test category")
        self.category2 = Category.objects.create(
            owner=self.user2, name="test category 2")

        # create transactions
        self.transaction1 = Transaction.objects.create(
            date=date.today(),
            description="transaction 1",
            bank_account=self.bankAccount,
            currency=self.currency,
            category=self.category,
            amount=10
        )
        self.transaction2 = Transaction.objects.create(
            date=date.today(),
            description="transaction 2",
            bank_account=self.bankAccount2,
            currency=self.currency,
            category=self.category,
            amount=20
        )

        # get user token
        self.client = APIClient()
        url = reverse('token_obtain_pair')

        response = self.client.post(url, {
            'username': self.username,
            'password': self.password
        }, format='json')

        self.assertEqual(response.status_code,
                         status.HTTP_200_OK, response.content)

        token = response.data['access']

        # Next post/get's will require the token to connect
        self.client.credentials(
            HTTP_AUTHORIZATION='Bearer {0}'.format(token))

    def test_list(self):
        response = self.client.get('/transactions/')
        # expecting a valide response
        self.assertEqual(response.status_code, 200)
        # expecting one transaction
        self.assertEqual(len(response.json()), 1)

    def test_invalid_transaction(self):
        response = self.client.get(
            '/transactions/' + str(self.transaction2.pk) + '/')
        # expecting a valide response
        self.assertEqual(response.status_code, 404)

    def test_create(self):
        # create
        response = self.client.post(
            '/transactions/',
            {
                'date': '2022-12-23',
                'description': 'test description',
                'amount': 100,
                'bank_account': self.bankAccount.pk,
                'currency': self.currency.pk,
                'category': self.category.pk,
            },
            format='json'
        )
        self.assertEqual(response.status_code, 201)

        # list should be 2
        response = self.client.get('/transactions/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 2)

    def test_create_missing_field(self):
        response = self.client.post(
            '/transactions/',
            {
                'date': '2022-12-23',
                'description': 'test description',
                'bank_account': self.bankAccount2.pk,
                'currency': self.currency.pk,
                'category': self.category.pk,
            },
            format='json'
        )
        self.assertEqual(response.status_code, 400)

    def test_create_invalid_currency(self):
        response = self.client.post(
            '/transactions/',
            {
                'date': '2022-12-23',
                'description': 'test description',
                'bank_account': self.bankAccount2.pk,
                'currency': self.currency.pk,
                'category': 2,
            },
            format='json'
        )
        self.assertEqual(response.status_code, 400)

    def test_create_invalid_bank_account(self):
        response = self.client.post(
            '/transactions/',
            {
                'date': '2022-12-23',
                'description': 'test description',
                'amount': 100,
                'bank_account': self.bankAccount2.pk,
                'currency': self.currency.pk,
                'category': self.category.pk,
            },
            format='json'
        )
        self.assertEqual(response.status_code, 400)

    def test_create_invalid_category(self):
        response = self.client.post(
            '/transactions/',
            {
                'date': '2022-12-23',
                'description': 'test description',
                'amount': 100,
                'bank_account': self.bankAccount.pk,
                'currency': self.currency.pk,
                'category': self.category2.pk,
            },
            format='json'
        )
        self.assertEqual(response.status_code, 400)

    def test_update(self):
        test_description = 'random_text'
        id = str(self.transaction1.pk)
        response = self.client.patch(
            '/transactions/' + id + '/',
            {
                'description': test_description
            },
            format='json'
        )
        self.assertEqual(response.status_code, 200)

        response = self.client.get('/transactions/' + id + '/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['description'], test_description)

    def test_update_invalid_field(self):
        id = str(self.transaction1.pk)
        response = self.client.patch(
            '/transactions/' + id + '/',
            {
                'invalid_field': 'invalid_text'
            },
            format='json'
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual('invalid_field' in response.json(), False)

    def test_update_invalid_transaction(self):
        test_description = 'random_text'
        id = str(self.transaction2.pk)
        response = self.client.patch(
            '/transactions/' + id + '/',
            {
                'description': test_description
            },
            format='json'
        )
        self.assertEqual(response.status_code, 404)

    def test_delete(self):
        id = str(self.transaction1.pk)
        response = self.client.delete(
            '/transactions/' + id + '/',

        )
        self.assertEqual(response.status_code, 204)

        # shouldn't exist anymore
        response = self.client.get(
            '/transactions/' + id + '/',
        )
        self.assertEqual(response.status_code, 404)

    def test_delete_invalid_transaction(self):
        id = str(self.transaction2.pk)
        response = self.client.delete(
            '/transactions/' + id + '/',
        )
        self.assertEqual(response.status_code, 404)
