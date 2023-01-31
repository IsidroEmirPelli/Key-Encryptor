from django.db import models
from django.contrib.auth.models import AbstractUser



class User(AbstractUser):
    """User model."""

    username = models.EmailField('email address', unique=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []