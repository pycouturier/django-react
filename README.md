# Django-React

## Principes généraux


### Back end
- [x] On met en place un modèle simple
- [x] On créé le serialiser qui correspond
- [x] On install djangorestframework
- [x] On met en place un endpoints pour lister tous les objects
- [ ] on test https://www.django-rest-framework.org/topics/browsable-api/ ?

### Front end
- [x] Toutes les sources du front end sont dans react_django_scaffold/frontend/src/
- [x] On utilise webpack pour les compresser en un seul et unique fichier js nommé bundle.js
- [x] Une app django nommmé front end n'expose qu'une seule view, celle-ci "render" le templace "index.html" qui est statique et fait appel au "bundle.js" créé par 

### Relation Front End // Back End
- [x] création d'un composant sous forme de fonction
- [x] Ajout d'un useEffet sans dépendance (?) fetchant les données (définition d'une async function interne appellée en synchrone dans useEffect)
- [ ] Faire au moins semblant de faire un truc joli

## Présentation des fichiers
| Fichier | Mode de Génération | Utilité |
|---------|--------------------|---------|
|.babelrc| Manuel | Indique à Babel que l'on travaille en réact |
|.eslintignore| Manuel | Le buldle.js ne respecte aucune règle de notre linter, l'exclure du linting |
|.eslintrc.js| npx eslint --init | configuration du linter |
|.gitignore| Manuel | .gitignore ...|
|package.json| npm init et npm i -D XX & npm i -S XX | utiliser npm install pour installer tous les packages npm nécessaires  |
|react_django_scaffold/frontend/__init__.py| python manage.py startapp frontend | |
|react_django_scaffold/frontend/apps.py| python manage.py startapp | |
|react_django_scaffold/frontend/migrations/__init__.py| python manage.py startapp | |
|react_django_scaffold/frontend/src/components/Copyright.jsx| Manuel | Exemple de composant |
|react_django_scaffold/frontend/src/index.jsx| Manuel | js entrypoint // Bootstrap du \<div\> app et import de composants |
|react_django_scaffold/frontend/templates/index.html| Manuel | Template avec \<div\> app et import de fichiers statiques  |
|react_django_scaffold/frontend/urls.py| Manuel | Routeur |
|react_django_scaffold/frontend/views.py| Manuel | render(request, "index.heml")|
|react_django_scaffold/manage.py| django-admin startproject react_django_scaffold  | |
|react_django_scaffold/react_django_scaffold/__init__.py| | |
|react_django_scaffold/react_django_scaffold/asgi.py| django-admin startproject react_django_scaffold  | |
|react_django_scaffold/react_django_scaffold/settings.py| django-admin startproject react_django_scaffold  | ajout de frontend dans les INSTALLED_APPS, STATIC_URL = '/static/' |
|react_django_scaffold/react_django_scaffold/urls.py| django-admin startproject react_django_scaffold  | |
|react_django_scaffold/react_django_scaffold/wsgi.py| django-admin startproject react_django_scaffold  | |
|requirements.txt| pip freeze > requirements.txt| |
|run.bat| Manuel | |
|webpack.config.js| Manuel | Configuration de webpack |