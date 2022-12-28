from rest_framework import serializers
from .models import Budget


class BudgetSerializer(serializers.ModelSerializer):
    owner = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = Budget
        fields = ('__all__')

    def validate_category(self, value):
        # Check ownership
        if not self.context['request'].user == value.owner:
            raise serializers.ValidationError("Not owned by user")

        return value
