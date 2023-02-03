from .models.passwords import Password
from .models.users import User
from .serializers import (password_serilizer, user_serializer)

from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated
# import JSONResponse
from django.http import JsonResponse


class RegisterPasswordViewSet(ModelViewSet):
    """ Here we will create the API for register a new password in the database
        We recive the user, name setted and the password """
    serializer_class = password_serilizer.PasswordSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request):
        """ Here we will create the password in the database """
        try:
            user = request.user
            user = User.objects.get(username=user)
            password = Password.objects.create(
                user_owner=user,
                title = request.data['title'],
                username=request.data['userName'],
                password=request.data['password'],
                notes=request.data['notes']
            )
            return HttpResponse(f'Password created successfully')
        except Exception as e:
            return HttpResponse(f'Unexpected error has ocurred {e}')

    def get(self, request):
        """ Here we will get the passwords from the database """
        try:
            user = request.user
            passwords = Password.objects.filter(user_owner=user)
            # serialize the passwords
            serializer = password_serilizer.PasswordSerializer(passwords, many=True)

            return JsonResponse(serializer.data, safe=False)
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
    

        