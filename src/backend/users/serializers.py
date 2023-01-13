from rest_framework import serializers
from django.contrib.auth.models import User
from django.forms.models import model_to_dict


class UserSerializer(serializers.BaseSerializer):
    class Meta:
        model = User
        fields = ['__all__']


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email',)
        extra_kwargs = {
            'email': {'required': True},
        }

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
        )

        user.set_password(validated_data['password'])
        user.save()

        return user
