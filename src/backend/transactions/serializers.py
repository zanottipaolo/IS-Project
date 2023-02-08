from rest_framework import serializers

from .models import Transaction


class TransactionSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(
        read_only=True, source="category.name")
    bank_account_name = serializers.CharField(
        read_only=True, source="bank_account.name")
    currency_name = serializers.CharField(
        read_only=True, source="currency.name")

    class Meta:
        model = Transaction
        fields = ('__all__')

    def validate_bank_account(self, value):
        # Check ownership
        if not self.context['request'].user == value.owner:
            raise serializers.ValidationError("Not owned by user")

        return value

    def validate_category(self, value):
        # Check ownership
        if not self.context['request'].user == value.owner:
            raise serializers.ValidationError("Not owned by user")

        return value
