from rest_framework import serializers
from .models import Milestone
from datetime import date


class MilestoneSerializer(serializers.ModelSerializer):
    owner = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = Milestone
        fields = ('__all__')

    def validate_due_date(self, value):
        if value <= date.today():
            raise serializers.ValidationError(
                "Must be after today")
        return value
