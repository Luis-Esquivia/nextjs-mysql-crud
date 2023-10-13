<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Next.js MySQL CRUD Project</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    h1 {
      color: #0871b2;
      text-align: center;
      padding-bottom: 6px;
      font-weight: bold;
      font-size: 20px;
    }
    h3, h4 {
      font-weight: bold;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin-bottom: 8px;
    }
    section {
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100vh - 10rem);
    }
    .flex {
      display: flex;
      gap: 20px;
      justify-content: center;
    }
    .p-6 {
      background-color: #fff;
      color: #000;
      width: 30%;
    }
    img {
      width: 30%;
    }
    .bg-blue-500, .bg-red-500, .bg-gray-500 {
      background-color: #3498db;
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    .bg-blue-500:hover, .bg-red-500:hover, .bg-gray-500:hover {
      background-color: #2980b9;
    }
  </style>
</head>
<body>

  <h1>Next.js MySQL CRUD Project</h1>

  <h2>Características</h2>
  <ul>
    <li><strong>Gestión de Productos:</strong> Crear, actualizar y eliminar productos con una interfaz fácil de usar.</li>
    <li><strong>Carga de Imágenes:</strong> Posibilidad de cargar imágenes de productos utilizando Cloudinary.</li>
    <li><strong>Diseño Responsivo:</strong> La aplicación está diseñada para funcionar perfectamente en diversas tamaños de pantalla.</li>
    <li><strong>Styled Components:</strong> Utiliza styled-components para dar estilo a los componentes, proporcionando un código limpio y fácil de mantener.</li>
  </ul>

  <h2>Componentes</h2>

  <h3>ProductForm</h3>
  <p>El componente ProductForm sirve como formulario para agregar o actualizar productos. Admite la carga de imágenes e interactúa con la base de datos MySQL para realizar operaciones CRUD. Se utilizan styled-components para el estilo.</p>

  <h3>ProductsPage</h3>
  <p>El componente ProductsPage obtiene y muestra una cuadrícula de productos utilizando el componente ProductCard. Interactúa con la base de datos MySQL a través de las rutas de API.</p>

  <!-- ... (Resto de los componentes) -->

  <h2>Configuración e Instalación</h2>
  <ol>
    <li>Clona el repositorio.</li>
    <li>Instala las dependencias con <code>npm install</code>.</li>
    <li>Configura las credenciales de tu base de datos MySQL.</li>
    <li>Configura una cuenta de Cloudinary y reemplaza las credenciales en el módulo de configuración cloudinary.</li>
    <li>Ejecuta la aplicación con <code>npm run dev</code>.</li>
  </ol>

  <p>¡Siéntete libre de explorar y mejorar este proyecto Next.js MySQL CRUD para tu caso de uso específico!</p>

</body>
</html>
