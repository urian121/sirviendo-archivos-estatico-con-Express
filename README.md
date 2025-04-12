# Servidor Express con Archivos Estáticos

## 🚀 Inicializar el proyecto

```bash
npm init -y
```

## 📦 Instalar Express

```bash
npm install express
```

## 🗂 Estructura del proyecto

Creamos una carpeta donde pondremos todos los archivos estáticos. Por ejemplo:

```
/app
  ├── index.html
  ├── style.css
  ├── logo.png
  └── script.js
```

## ⚙️ Configurar Express para servir archivos estáticos

```js
const express = require('express')
const app = express()
const port = 3000

// Carpeta principal de archivos estáticos
app.use(express.static('app'))

// Otra carpeta opcional (por ejemplo: 'static')
app.use(express.static('static'))

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
```

📌 **Importante:** Express buscará los archivos en el orden en que definiste los `.use()`.

## 🧪 Ejemplos de acceso

Si tienes los siguientes archivos dentro de `/app`:

- `logo.png`
- `style.css`
- `hola.html`

Podrás acceder desde el navegador así:

```
http://localhost:3000/logo.png
http://localhost:3000/style.css
http://localhost:3000/hola.html
```

## 🛣 Usar una ruta personalizada

Si quieres servir los archivos desde una ruta específica (`/static` por ejemplo):

```js
app.use('/static', express.static('app'))
app.use('/static', express.static('static'))
```

Y accederías así:

```
http://localhost:3000/static/logo.png
http://localhost:3000/static/style.css
```

## ▶️ Ejecutar el servidor

```bash
node app.js
```

O si querés que escuche los cambios automáticamente (Node 18+):

```bash
node --watch app.js
```

---

## 📚 Referencias

- [Archivos estáticos en Express](https://expressjs.com/es/starter/static-files.html)
