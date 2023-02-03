from ..models.passwords import Password
from rest_framework import serializers

class PasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Password
        fields = ('title', 'username', 'password', 'notes')
    
    def __str__(self) -> str:
        return super().__str__()