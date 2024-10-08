"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers, permissions

# Swagger
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# JWT
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

# Views
from users.views import UserViewSet, RegisterView
from bank_accounts.views import BankAccountsViewSet
from transactions.views import TransactionViewSet
from categories.views import CategoriesViewSet
from milestones.views import MilestonesViewSet
from budgets.views import BudgetsViewSet

schema_view = get_schema_view(
    openapi.Info(
        title="backend API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'bank_accounts', BankAccountsViewSet)
router.register(r'transactions', TransactionViewSet)
router.register(r'categories', CategoriesViewSet)
router.register(r'milestones', MilestonesViewSet)
router.register(r'budgets', BudgetsViewSet)

urlpatterns = [
    # urls
    path('', include(router.urls)),
    # admin
    path('admin/', admin.site.urls),
    # swagger
    re_path(r'^swagger(?P<format>\.json|\.yaml)$',
            schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger',
            cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc',
            cache_timeout=0), name='schema-redoc'),
    path('api-auth/', include('rest_framework.urls')),
    # auth
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
