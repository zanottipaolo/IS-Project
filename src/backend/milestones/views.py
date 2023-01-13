# Create your views here.
from rest_framework import viewsets, permissions

from .models import Milestone
from .serializers import MilestoneSerializer
# Create your views here.


class MilestonesViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Milestone.objects.all()
    serializer_class = MilestoneSerializer

    def get_queryset(self):
        return Milestone.objects.filter(owner=self.request.user)
