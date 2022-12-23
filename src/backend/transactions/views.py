from django.shortcuts import render
from rest_framework import viewsets, permissions

from .models import Transaction
from .serializers import TransactionSerializer
# Create your views here.


class TransactionViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
