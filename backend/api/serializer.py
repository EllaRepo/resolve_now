"""Module that converts complex data types, such as Django models or querysets,
   into JSON, XML, or other content types that can be easily consumed by
   web APIs
"""
from api.models import User, Complaint
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    """User model serializer class
    """
    class Meta:
        model = User
        fields = ('id', 'full_name', 'username', 'email', 'phone')

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    """Token serializer class
    """
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        print("token ")
        print(user)
        
        # These are claims, you can add custom claims
        token['full_name'] = user.full_name
        token['username'] = user.username
        token['email'] = user.email
        token['phone'] = user.phone
        token['is_inspector'] = user.is_inspector
 
        return token

class RegisterPublicSerializer(serializers.ModelSerializer):
    """Public user registration serializer class
    """
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('full_name', 'email', 'username', 'phone', 'password', 'password2', 'is_inspector')

    def validate(self, attrs):
        """validates passwords entred by user
        """
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        """Creates User instance
        """
        is_insp = False
        if (validated_data['is_inspector'] == "True"):
            is_insp = True
        user = User.objects.create(
            full_name=validated_data['full_name'],
            username=validated_data['username'],
            email=validated_data['email'],
            phone=validated_data['phone'],
            is_inspector=is_insp
        )

        user.set_password(validated_data['password'])
        user.save()

        return user
    
class ComplaintSerializer(serializers.ModelSerializer):
    """Complaint registrating serializer
    """
    class Meta:
        model = Complaint
        fields = ('email', 'username', 'compTitle', 'city', 'subCity', 'landmark', 'desc', 'region', 'compType', 'compSev')
