# 🚀 Guía de Despliegue en GitHub Pages

## Paso 1: Preparar el Repositorio

1. **Crear un nuevo repositorio en GitHub**
   - Ve a https://github.com/new
   - Nombra tu repo (ejemplo: `404-to-mars`)
   - Hazlo público
   - NO inicialices con README (ya tienes uno)

## Paso 2: Subir tu Código

```bash
# Inicializa git en tu proyecto local
git init

# Añade todos los archivos
git add .

# Haz tu primer commit
git commit -m "Initial commit: 404 Mars page with 90s aesthetic"

# Conecta con tu repositorio remoto (reemplaza TU-USUARIO y REPO-NAME)
git remote add origin https://github.com/TU-USUARIO/REPO-NAME.git

# Sube los archivos
git branch -M main
git push -u origin main
```

## Paso 3: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click en **Save**

## Paso 4: Configurar como Página 404

Para que funcione como página de error 404:

1. **Renombra el archivo**: 
   ```bash
   # En tu proyecto local
   mv 404.html index.html
   git add .
   git commit -m "Rename to index.html for GitHub Pages"
   git push
   ```

2. **O mantén 404.html y crea un index.html que redirija**:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <meta http-equiv="refresh" content="0; url=404.html">
   </head>
   <body>
       <p>Redirecting...</p>
   </body>
   </html>
   ```

## Paso 5: Verificar el Despliegue

Tu página estará disponible en:
```
https://TU-USUARIO.github.io/REPO-NAME/
```

Espera 1-2 minutos para que GitHub procese los cambios.

## Configuración Avanzada (Opcional)

### Dominio Personalizado

1. En GitHub Pages settings, añade tu dominio personalizado
2. Configura los DNS records en tu proveedor de dominio:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
          185.199.109.153
          185.199.110.153
          185.199.111.153
   ```

### HTTPS

GitHub Pages proporciona HTTPS automáticamente. Si usas un dominio personalizado:
1. Espera a que el DNS se propague (puede tomar hasta 24 horas)
2. En GitHub Pages settings, marca **Enforce HTTPS**

## Estructura Recomendada para GitHub Pages

```
404-to-mars/
├── index.html         # Página principal o redirección
├── 404.html          # Tu página de error personalizada
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── README.md
└── LICENSE
```

## Solución de Problemas

### La página no se muestra
- Verifica que GitHub Pages esté activado en Settings
- Asegúrate de que los archivos estén en la rama correcta (`main`)
- Espera unos minutos para que se procese

### Los estilos no cargan
- Verifica las rutas en tu HTML:
  ```html
  <!-- Incorrecto -->
  <link rel="stylesheet" href="/css/styles.css">
  
  <!-- Correcto para GitHub Pages -->
  <link rel="stylesheet" href="css/styles.css">
  ```

### JavaScript no funciona
- Abre la consola del navegador (F12) para ver errores
- Verifica las rutas de los archivos JS

## Actualizar tu Página

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Los cambios se reflejarán en 1-2 minutos.

## Comandos Git Útiles

```bash
# Ver estado de archivos
git status

# Ver historial de commits
git log --oneline

# Crear una nueva rama para experimentar
git checkout -b experimental

# Volver a la rama principal
git checkout main

# Ver diferencias antes de commit
git diff
```

## Recursos Adicionales

- [Documentación oficial de GitHub Pages](https://docs.github.com/en/pages)
- [Guía de Git](https://git-scm.com/book/en/v2)
- [Markdown Guide](https://www.markdownguide.org/)

---

¡Tu página 404 estará online en minutos! 🚀✨
