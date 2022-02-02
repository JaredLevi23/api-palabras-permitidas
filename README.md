# Prueba de MaxiPublica
API de palabras permitidas

# Requisitos

- Tener instalado node ( esta api esta creada en la v16.10.0 )
	- https://nodejs.org/en/
- Tener MongoDB, se utilizo la versión community
	- https://www.mongodb.com/try/download/community

#  Comenzar

##  Base de datos
- Levantar el entorno de MongoDB
- Crear una base de datos llamada palabras con el comando `use palabras`
- Copiar la cadena de conexión de la base de datos en el archivo .env que se encuentra en la raíz del proyecto y establecer el puerto para la API

Archivo .env

> PORT=8080
>
> MONGODB_CNN=cadena_de_conexion_de_mongo

 
##  Levantar el entorno
En la raíz del proyecto ejecutar los siguientes comandos: 
- Ejecutar el comando `npm install` para instalar las dependencias
- Ejecutar el comando `npm start` para inicializar el servidor

## Documentación 
- En LANGUAGE seleccionar HTTP para una mejor visualización

> Enlace:  [Prueba MaxiPublica (getpostman.com)](https://documenter.getpostman.com/view/15453720/UVeFLRBU)