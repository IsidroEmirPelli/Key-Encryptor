from django.db import models

class Password(models.Model):
    """ Here we will create the model for the passwords """
    email = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.name