from django.urls import path
from rest_framework_swagger.views import get_swagger_view
from .views import RegisterPasswordViewSet, RegisterNewUser
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


schema_view = get_swagger_view(title='API DOC')


urlpatterns = [
    path('doc', schema_view),
    path('new_pass', RegisterPasswordViewSet.as_view({'post': 'create'})),
    path('get_pass', RegisterPasswordViewSet.as_view({'get': 'get'})),
    path('token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register', RegisterNewUser.as_view({'post': 'create'})),
]