from django.db import models
from ..models.users import User

class Password(models.Model):
    """ Here we will create the model for the passwords """
    title = models.CharField(max_length=255)
    username = models.CharField(max_length=255, null=True, blank=True)
    password = models.CharField(max_length=255, null=True, blank=True)
    notes = models.TextField(null=True, blank=True)
    # only we store the user id
    user_owner = models.CharField(max_length=255)

    def __str__(self):
        return self.title