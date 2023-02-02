from .models.passwords import Password
from .models.users import User
from .serializers import (password_serilizer, user_serializer)

from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated

class RegisterPasswordViewSet(ModelViewSet):
    """ Here we will create the API for register a new password in the database
        We recive the user, name setted and the password """
    serializer_class = password_serilizer.PasswordSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):
        """ Here we will get the passwords from the database """
        # we will get the username from the request
        username = request.user.username
        # we will get the user from the database
        user = User.objects.get(username=username)
        # we will get the passwords from the database
        queryset = Password.objects.filter(email=user.username)
        serializer = password_serilizer.PasswordSerializer(queryset, many=True)

        return HttpResponse(f'Passwords: {serializer.data}')
    
class RegisterNewUser(ModelViewSet):
    """ Here we will create the API for register a new user in the database """
    serializer_class = user_serializer.UserSerializer

    def create(self, request):
        """ Here we will create the user in the database """
        serializer = user_serializer.UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return HttpResponse(f'User created successfully')
        return HttpResponse(f'Unexpected error has ocurred {serializer.errors}')
    

        