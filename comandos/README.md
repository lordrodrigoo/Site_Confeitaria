# Criando ambiente virtual
    - python -m venv venv
    - .\venv\Scripts\activate
    - pip install django 

# configurar o git 

# Iniciando o projeto:
    - django-admin startproject nome do projeto . 
    - python manage.py runserver
    - python manage.py startapp myapp (add o app no settings,py)
    - Criar as pastas para templates e arquivos estáticos ( Atualize no settings também)
    - Migrações: 
        -> python manage.py makemigrations  
        -> python manage.py migrate
    - Super usuário -> python manage.py createsuperuser
    - Ajuste se preferir idioma e hora no settings .. 


