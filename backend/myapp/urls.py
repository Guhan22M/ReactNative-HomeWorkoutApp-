from django.urls import path
from .views import RegisterView, LoginView, UserProfileView, UserProfileUpdateView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('profile/update/', UserProfileUpdateView.as_view(), name='profile_update'),
]
