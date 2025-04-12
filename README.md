# API Restaurante

Este proyecto es una API para la gestión de un restaurante, permitiendo la administración de pedidos, usuarios, mesas, ingredientes y más.

## Indice

1. [Informacion General](#general-info)
2. [Tecnologias](#technologies)
3. [Instalacion](#installation)
4. [Colaboracion](#collaboration)
5. [Preguntas Frecuentes](#faqs)

## Informacion general

La API está diseñada para ser escalable y fácil de mantener, utilizando tecnologías como Node.js y PostgreSQL. Ofrece funcionalidades para gestionar pedidos, usuarios, mesas, menús y más, facilitando la administración del restaurante.

## Tegnologias

* Node.js
* Express
* PostgreSQL
* pg (PostgreSQL driver for Node.js)
* dotenv para manejo de variables de entorno
* Nodemon para desarrollo

## Instalacion

1. Clona el repositorio:
clon git https://github.com/Madelynglanuza/api-restaurante.git


2. Instala las dependencias:
instalación de npm


3. Configura las variables de entorno en `.env`:
DB_HOST=127.0.0.1
DB_USER=postgres
DB_PASSWORD=Gissell177
DB_NAME=Restaurante
DB_PORT=5432
PORT=3000


4. Ejecuta el servidor:
npm ejecutar dev


## Preguntas frecuentes

* P: ¿Cómo puedo acceder a la API?
R: Accede a través de `http://localhost:3000`.

* P: ¿Qué rutas están disponibles?
R: Puedes acceder a rutas como `/api/usuarios`, `/api/pedidos`, `/api/mesas`, entre otras.
