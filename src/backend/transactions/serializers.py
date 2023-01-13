from rest_framework import serializers
from .models import Transaction


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ('__all__')

    def validate_bank_account(self, value):
        # Check ownership
        if not self.context['request'].user == value.owner:
            raise serializers.ValidationError("Not owned by user")

        return value
