#Primer comando para inicializar desarrollo
npm init -y

#Instalar express
npm install --save express

#Creamos una carpeta dentro del proyecto donde irán nuestros archivos estáticos.
#Para este caso la carpeta se llamará app

#Configuración de directorios

#Se colon todos los archivos estáticos en la carpeta /app, ejemplo,imágenes, videos, archivos, css, etc,
#con el fin que el servidor Express utilice esa carpeta como fuente de archivos estáticos.
#Solo tenemos que usar el código express.static().

#Si por ejemplo en nuestra carpeta /app hubieran archivos como js, css, htm, images, index.html, etc.
#Podríamos acceder desde el servidor con las rutas:

http://localhost:3000/logo.png
http://localhost:3000/style.css
http://localhost:3000/hola.html

#IMPORTANTE: Si por ejemplo quisieramos tener otra carpeta con archivo estaticos,
#es decir usarla como fuente de archivos estáticos, obvio que no se la anterior,
#imaginemos que la llamamo 'static o public' simplemente hay que llamar la función nuevamente asi;

//Le decimos al servidor que use /app y /static como fuente de archivos estáticos
app.use(express.static('app'))
app.use(express.static('static'))

//Importante, Express buscará los archivos en el orden que definan los directorios estáticos.

//Rutas personalizadas
#Si queremos crear una ruta personalizada con la cual acceder los archivos estáticos,
#lo podemos hacer pasando el nombre como primer parámetro de la función de la siguiente manera:

// le decimos al servidor que use /app y /static como fuente de archivos estáticos
app.use('/static', express.static('app'))
app.use('/static', express.static('static'))

//Accederíamos a los archivos de esta forma:
http://localhost:3000/app/logo.png
http://localhost:3000/app/style.css
http://localhost:3000/app/hola.html
