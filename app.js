// Incluimos el modulo de express
const express = require("express");

// Incluimos el modulo de path que viene por defecto en la instalacion de Node.js
const path = require("path");

// Creamos la aplicación de Express con la función express()
const app = express();

//Le decimos al servidor que use la carpeta /app como fuente de archivos estáticos
app.use(express.static("app"));

// express.static() es una función del middleware
// Un middleware es una función que se puede ejecutar antes o después del manejo de una ruta.
// Esta función tiene acceso al objeto Request, Response y la función next()

// Establecemos un puerto por el cual nuestro servidor estará escuchando
const PORT = process.env.PORT || 3000;

// Servimos los archivos que se encuentran en el directorio public
app.use(express.static(path.join(__dirname, "public")));
//La variable global '__dirname' almacena el path donde se encuentra la aplicación Node.js

//app.use(express.static(__dirname + '/public'));

app.get("/rutax", (req, res) => {
  res.sendFile(__dirname + "/app/hola.html");
});

/*
app.use('/static', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
*/

// Indicamos que serviremos el archivo index.html cuando accedamos a esta ruta
app.get("/", function (req, res) {
  res.send("hola");
});

// Nuestra aplicación estará escuchando en el puerto que definimos previamente
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
