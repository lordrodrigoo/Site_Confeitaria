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

# OBS: ANTES DO DEPLOY FAÇA AS MIGRAÇÔES NECESSÀRIAS
    - python manage.py makemigrations
    - python manage.py migrate

# Fazendo deploy Usando Render:
    -  pip install  whitenoise[brotli]
    -  pip freeze > requirements.txt
    -  pip install gunicorn uvicorn

    - Abra settings.pyno diretório principal do seu projeto (por exemplo, mysite/settings.py)

    ADICIONE O MIDDLEWARE :
    MIDDLEWARE = [
    'whitenoise.middleware.WhiteNoiseMiddleware',
    ...
    ]

    - Ainda em settings.py:

    # Static files (CSS, JavaScript, Images)
    # https://docs.djangoproject.com/en/5.0/howto/static-files/

    # This setting informs Django of the URI path from which your static files will be served to users
    # Here, they well be accessible at your-domain.onrender.com/static/... or yourcustomdomain.com/static/...
    STATIC_URL = '/static/'

    # This production code might break development mode, so we check whether we're in DEBUG mode

    if not DEBUG:
        # Tell Django to copy static assets into a path called `staticfiles` (this is specific to Render)
        STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
        # Enable the WhiteNoise storage backend, which compresses static files to reduce disk use
        # and renames the files with unique names for each version to support long-term caching
        STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Crie um novo arquivo chamado build.shno diretório raiz do seu projeto e cole o seguinte:
    #!/usr/bin/env bash
    # Exit on error
    set -o errexit

    # Modify this line as needed for your package manager (pip, poetry, etc.)
    pip install -r requirements.txt

    # Convert static asset files
    python manage.py collectstatic --no-input

    # Apply any outstanding database migrations
    python manage.py migrate

# Certifique-se de que o script seja executável antes de adicioná-lo ao controle de versão:
   WINDOWS ->  ./build.sh (rode no terminal ou gitbash)
   Linux/Mac -> chmod a+x build.sh


# Testando projeto Localmente:
    No terminal ou gitbash:

        source venv/Scripts/activate

        python -m uvicorn project.asgi:application 

# Implantação Manual
 - https://render.com/docs/deploy-django#installation--setup