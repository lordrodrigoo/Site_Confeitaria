"""
URL configuration for project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
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
from django.urls import path
from store import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('produtos/', views.produtos, name='produtos'),
    path('bolos-decorados/', views.bolos_decorados, name='bolos_decorados'),
    path('sobre/', views.sobre, name='sobre'),



    path('produtos/bolos-com-cobertura/', views.bolos_com_cobertura, name='produtos/bolos_com_cobertura'),
    path('produtos/bolos-da-vovo/', views.bolos_da_vovo, name='produtos/bolos_da_vovo'),
    path('produtos/bolos-de-pote/', views.bolos_de_pote, name='produtos/bolos_de_pote'),
    path('produtos/cones/', views.cones, name='produtos/cones'),
    path('produtos/copos_felicidade/', views.copos_felicidade, name='produtos/copos_felicidade'),
    path('produtos/doces_sobremesas/', views.doces_sobremesas, name='produtos/doces_sobremesas'),
    path('produtos/sobremesas_familia/', views.sobremesas_familia, name='produtos/sobremesas_familia'),

]
