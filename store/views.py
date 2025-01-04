from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request, 'store/home.html')

def produtos(request):
    return render(request, 'store/produtos.html')

def bolos_com_cobertura(request):
    return render(request, 'store/bolos_com_cobertura.html')

def bolos_da_vovo(resquest):
    return render(resquest, 'store/bolos_da_vovo.html')

def bolos_de_pote(request):
    return render(request, 'store/bolos_de_pote.html')

def cones(request):
    return render(request, 'store/cones.html')

def copos_felicidade(request):
    return render(request, 'store/copos_felicidade.html')

def doces_sobremesas(request):
    return render(request, 'store/doces_sobremesas.html')

def sobremesas_familia(request):
    return render(request, 'store/sobremesas_familia.html')

def bolos_decorados(request):
    return render(request, 'store/bolos_decorados.html')

def sobre(request):
    return render(request, 'store/sobre.html')