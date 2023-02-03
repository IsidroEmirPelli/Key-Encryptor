from .models.passwords import Password
from .models.users import User
from .serializers import (password_serilizer, user_serializer)

from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import AccessToken

class RegisterPasswordViewSet(ModelViewSet):
    """ Here we will create the API for register a new password in the database
        We recive the user, name setted and the password """
    serializer_class = password_serilizer.PasswordSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request):
        """ Here we will create the password in the database """
        try:
            token = request.headers['Authorization'].split(' ')[1]
            token = AccessToken(token)
            user_id = token['id']
            user = User.objects.get(id=user_id)
            password = Password.objects.create(
                user_owner=user,
                title = request.data['title'],
                username=request.data['username'],
                password=request.data['password'],
                notes=request.data['notes']
            )
            return HttpResponse(f'Password created successfully')
        except Exception as e:
            return HttpResponse(f'Unexpected error has ocurred {e}')

    def get(self, request):
        """ Here we will get the passwords from the database """
        try:
            # get the token from the request
            token = request.headers['Authorization'].split(' ')[1]
            # decode the token
            token = AccessToken(token)
            # get the user id from the token
            user_id = token['user_id']
            # get the user from the database
            user = User.objects.get(id=user_id)
            # get the passwords from the database
            passwords = Password.objects.filter(user_owner=user.id)
            # serialize the passwords
            serializer = password_serilizer.PasswordSerializer(passwords, many=True)

            return HttpResponse(f'Passwords: {serializer.data}')
        except Exception as e:
            return HttpResponse(f'Unexpected error has ocurred {e}')
    
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
    

        