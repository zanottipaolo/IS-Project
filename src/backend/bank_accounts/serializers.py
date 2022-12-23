from rest_framework import serializers
from .models import BankAccount


class BankAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankAccount
        fields = ('__all__')
        extra_kwargs = {
            # automatically added
            'owner': {'required': False, 'write_only': True},
        }
