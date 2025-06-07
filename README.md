# README.md para muci-app

Este documento describe cómo configurar y desplegar la aplicación `muci-app`.

## Descripción del Proyecto

`muci-app` es una aplicación web desarrollada con **React**. Basándonos en la estructura de archivos y las dependencias en `package.json`, es un proyecto típico de **Create React App (CRA)**.

### Estructura de Carpetas

A continuación, se detalla la estructura principal de las carpetas del proyecto:

* **`public/`**: Contiene los archivos estáticos públicos, como el `index.html` y los íconos de la aplicación.
* **`src/`**: Contiene el código fuente de la aplicación, incluyendo:
    * **`assets/`**: Probablemente imágenes, íconos, fuentes u otros recursos estáticos.
    * **`components/`**: Componentes reutilizables de React.
    * **`Context/`**: Posiblemente, contextos de React para la gestión del estado global.
    * **`screens/`**: Vistas o páginas principales de la aplicación.
    * Archivos raíz como `App.js` (componente principal), `index.js` (punto de entrada de la aplicación), y archivos CSS para estilos.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

* **Node.js**: Se recomienda usar la versión LTS más reciente. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
* **npm** (Node Package Manager): Viene incluido con Node.js.

---

## Configuración Local

Sigue estos pasos para configurar el proyecto en tu entorno de desarrollo:

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd muci-app
    ```
    *Reemplaza `<URL_DEL_REPOSITORIO>` con la URL real de tu repositorio.*

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```
    Esto instalará todas las librerías listadas en `package.json`.

3.  **Ejecuta la aplicación en modo desarrollo:**
    ```bash
    npm start
    ```
    Esto iniciará un servidor de desarrollo local y abrirá la aplicación en tu navegador en `http://localhost:3000` (o un puerto similar si el 3000 está ocupado). Los cambios que hagas en el código se reflejarán automáticamente.

---

## Despliegue en Producción

El proceso de despliegue en producción implica construir una versión optimizada de la aplicación y luego servir esos archivos estáticos.

### 1. Construir la Aplicación para Producción

Para crear una versión optimizada y lista para producción de tu aplicación:

```bash
npm run build
```
Este comando creará una carpeta llamada build (o dist, dependiendo de la configuración) en la raíz de tu proyecto. Esta carpeta contendrá todos los archivos estáticos necesarios para ejecutar tu aplicación en un servidor de producción.

---

### 2. Servir la Aplicación Construida

La carpeta build es una aplicación estática y puede ser servida por cualquier servidor web que soporte archivos estáticos (como Nginx, Apache, o servicios de hosting como Netlify, Vercel, etc.).

### Ejemplo de despliegue con Nginx (en un servidor Linux)
#### 1. Copia los archivos de la build:
Primero, asegúrate de que los archivos de la carpeta build estén en tu servidor. Puedes copiarlos vía scp, rsync, o a través de tu proceso de CI/CD.

Por ejemplo, si los copias a /var/www/html/muci-app/:

#### 2. Configura Nginx:
Crea un nuevo archivo de configuración para tu sitio en Nginx. Un lugar común es /etc/nginx/sites-available/muci-app (en sistemas basados en Debian/Ubuntu).

```Nginx

server {
    listen 80;
    server_name tu_dominio.com www.tu_dominio.com; # Reemplaza con tu dominio

    root /var/www/html/muci-app; # Ruta donde copiaste los archivos de la build
    index index.html index.htm;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Opcional: Configuración para el caché de archivos estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|ttf|otf|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    # Opcional: Para manejar rutas del lado del cliente (si usas react-router-dom en modo historial)
    error_page 404 /index.html;
}
```

#### 3. Habilita el sitio y reinicia Nginx:
Crea un enlace simbólico desde sites-available a sites-enabled:

```Bash

sudo ln -s /etc/nginx/sites-available/muci-app /etc/nginx/sites-enabled/
```

Verifica la sintaxis de la configuración de Nginx y reinicia el servicio:

```Bash

sudo nginx -t
sudo systemctl restart nginx
```

#### Consideraciones adicionales para el servidor:

* Variables de Entorno: Si tu aplicación React necesita variables de entorno en producción (por ejemplo, URLs de APIs, claves de servicios), deberás configurarlas antes de ejecutar npm run build. En Create React App, esto se hace prefijando las variables con REACT_APP_ y definiéndolas en un archivo .env.production o directamente en tu entorno de CI/CD.
* HTTPS: En un entorno de producción, es crucial usar HTTPS. Puedes configurar SSL/TLS con Nginx y Let's Encrypt para obtener certificados gratuitos.
* Manejo de Errores: Asegúrate de que tu servidor web esté configurado para manejar rutas no encontradas (404) redirigiéndolas a index.html para que React Router pueda gestionar las rutas.
* Rutas de API: Si tu aplicación se comunica con un backend (API), asegúrate de que las URLs de la API estén correctamente configuradas para el entorno de producción.

---

## Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:

* npm start: Ejecuta la aplicación en modo desarrollo.
* npm run build: Construye la aplicación para producción en la carpeta build.
* npm test: Lanza el corredor de pruebas.
* npm run eject: (¡Precaución!) Expulsa la configuración de Create React App. Esta es una operación unidireccional y no se puede revertir.