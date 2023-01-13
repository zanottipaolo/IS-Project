from rest_framework import serializers
from .models import BankAccount


class BankAccountSerializer(serializers.ModelSerializer):
    owner = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )
    current_amount = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = BankAccount
        fields = ('__all__')

    def get_current_amount(self, obj):
        return obj.current_amount()
