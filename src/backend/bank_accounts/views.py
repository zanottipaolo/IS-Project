from django.shortcuts import render
from rest_framework import viewsets, permissions

from .models import BankAccount
from .serializers import BankAccountSerializer
# Create your views here.


class BankAccountsViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = BankAccount.objects.all()
    serializer_class = BankAccountSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
