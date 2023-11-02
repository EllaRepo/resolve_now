from django.urls import path
from . import views

from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    path('region/', views.getRegions, name='region'),
    path('ctypes/', views.getCompTypes, name='ctypes'),
    path('complaints/<email>', views.complaints, name='complaints'),
    path('', views.getRoutes),
]
                                                                     