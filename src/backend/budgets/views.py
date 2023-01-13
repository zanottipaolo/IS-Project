from rest_framework import viewsets, permissions

from .models import Budget
from .serializers import BudgetSerializer

# Create your views here.


class BudgetsViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer

    def get_queryset(self):
        return Budget.objects.filter(owner=self.request.user)
