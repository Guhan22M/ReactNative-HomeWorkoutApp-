from rest_framework import serializers
from .models import CustomUser, UserProfile  # Import CustomUser instead of default User

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser  # Use CustomUser model
        fields = ('username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)  # Use CustomUser's manager
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('height', 'weight', 'bmi')
