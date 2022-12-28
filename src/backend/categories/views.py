from rest_framework import viewsets, permissions

from .models import Category
from .serializers import CategorySerializer
# Create your views here.


class CategoriesViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.filter(owner=self.request.user)
