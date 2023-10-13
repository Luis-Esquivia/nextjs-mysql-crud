# Proyecto CRUD con Next.js

## Descripción

Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) desarrollada con Next.js. La aplicación incluye funcionalidades para gestionar productos, utilizando una base de datos MySQL con el enfoque "use client". Las operaciones CRUD se realizan a través de una serie de rutas de API, y los componentes del front-end están construidos con styled-components para el estilo.

## Estructura del Proyecto

### Componente ProductForm

El componente `ProductForm` es responsable de manejar la creación y actualización de productos. Utiliza la gestión de estado con el hook `useState` de React, carga de archivos y envíos de formularios. El componente también utiliza styled-components para el estilo.

### Componente ProductsPage

El componente `ProductsPage` obtiene y muestra una lista de productos desde la base de datos MySQL. Utiliza la función `loadProducts` para obtener datos de la API y renderiza los productos obtenidos utilizando el componente `ProductCard`.

### Configuración de Cloudinary

La configuración de Cloudinary se establece utilizando el SDK de Cloudinary (v2) para manejar la carga y transformación de imágenes. Las credenciales (cloud_name, api_key, api_secret) se almacenan en un archivo separado.

### Procesamiento de Imágenes

La función `processImage` se encarga de procesar y almacenar imágenes. Convierte la imagen en un búfer y la guarda en el directorio público, devolviendo la ruta del archivo.

### Rutas de API

#### Ruta API `GET`

- Recupera datos de productos desde la base de datos MySQL.
- Devuelve una respuesta JSON con los datos del producto.

#### Ruta API `POST`

- Maneja la creación de un nuevo producto.
- Acepta datos de formulario, procesa la imagen usando Cloudinary y guarda los datos del producto en la base de datos MySQL.
- Devuelve una respuesta JSON con el producto recién creado.

#### Ruta API `PUT`

- Maneja la actualización de un producto existente.
- Acepta datos de formulario, procesa la imagen usando Cloudinary y actualiza los datos del producto en la base de datos MySQL.
- Devuelve una respuesta JSON confirmando la actualización.

#### Ruta API `DELETE`

- Maneja la eliminación de un producto.
- Elimina el producto de la base de datos MySQL.
- Devuelve una respuesta JSON confirmando la eliminación.

## Componente Navbar

El componente `Navbar` proporciona enlaces de navegación a diferentes secciones de la aplicación. Utiliza styled-components para el estilo e incluye transiciones para una experiencia de usuario más fluida.

## Cómo Ejecutar

1. Clonar el repositorio.
2. Instalar dependencias con `npm install`.
3. Configurar la base de datos MySQL y actualizar los detalles de conexión.
4. Configurar Cloudinary y actualizar las credenciales.
5. Ejecutar la aplicación con `npm run dev`.

## Tecnologías Utilizadas

- Next.js
- MySQL
- styled-components
- Cloudinary

## Echo por

- [Luis Daniel Esquivia Hernandez]

¡Siéntete libre de contribuir, informar problemas o sugerir mejoras!
