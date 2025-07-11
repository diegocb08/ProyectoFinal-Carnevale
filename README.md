# 🛒 E-Commerce React

Una aplicación de e-commerce desarrollada con React y Vite, que permite a los usuarios explorar productos, gestionar un carrito de compras y realizar pedidos.

## 🚀 Características Principales

-   **Catálogo de productos**: Navegación por categorías con filtros dinámicos
-   **Carrito de compras**: Funcionalidad completa con incremento/decremento de cantidades
-   **Checkout integrado**: Proceso de compra con validación de formularios
-   **Interfaz responsive**: Diseño optimizado para dispositivos móviles y desktop
-   **Notificaciones interactivas**: Sistema de toast para feedback del usuario
-   **Gestión de estado**: Context API para el manejo global del carrito
-   **Base de datos en tiempo real**: Integración con Firebase Firestore

## 🛠️ Tecnologías Utilizadas

### Frontend

-   **React 19.1.0** - Biblioteca de JavaScript para construir interfaces de usuario
-   **Vite 6.3.5** - Herramienta de construcción y desarrollo rápido
-   **React Router DOM 7.6.2** - Enrutamiento para aplicaciones React
-   **CSS Modules** - Estilos con alcance local para componentes

### Backend y Base de Datos

-   **Firebase 11.9.1** - Plataforma de desarrollo de aplicaciones
-   **Firestore** - Base de datos NoSQL en tiempo real

### Librerías Adicionales

-   **React Toastify 11.0.5** - Notificaciones toast elegantes
-   **React Spinners 0.17.0** - Componentes de carga animados

### Herramientas de Desarrollo

-   **ESLint 9.25.0** - Linter para JavaScript y React
-   **Vite Plugin React 4.4.1** - Plugin de React para Vite

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── CartContainer.jsx     # Contenedor del carrito
│   ├── CartWidget.jsx        # Widget del carrito en navbar
│   ├── Checkout.jsx          # Formulario de checkout
│   ├── EmptyCart.jsx         # Estado vacío del carrito
│   ├── Item.jsx              # Tarjeta de producto
│   ├── ItemCount.jsx         # Contador de cantidad
│   ├── ItemDetail.jsx        # Detalle del producto
│   ├── ItemDetailContainer.jsx
│   ├── ItemList.jsx          # Lista de productos
│   ├── ItemListContainer.jsx
│   ├── NavBar.jsx            # Barra de navegación
│   └── NotFound.jsx          # Página 404
├── context/             # Context API
│   ├── CartContext.js        # Contexto del carrito
│   ├── CartProvider.jsx      # Proveedor del carrito
│   └── useCart.js            # Hook personalizado
├── firebase/            # Configuración Firebase
│   ├── config.js             # Configuración de Firebase
│   └── db.js                 # Funciones de base de datos
├── hoc/                 # Higher Order Components
│   └── withLoading.jsx       # HOC para estados de carga
├── App.jsx              # Componente principal
└── main.jsx            # Punto de entrada
```

## 🚀 Instalación y Uso

### Prerrequisitos

-   Node.js (versión 16 o superior)
-   npm o yarn

### Instalación

1. **Clona el repositorio**

    ```bash
    git clone https://github.com/diegocb08/ProyectoFinal-Carnevale.git
    cd ProyectoFinal-Carnevale
    ```

2. **Instala las dependencias**

    ```bash
    npm install
    ```

3. **Configura Firebase**

    - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
    - Configura Firestore Database
    - Actualiza las credenciales en `src/firebase/config.js`

4. **Ejecuta la aplicación**

    ```bash
    npm run dev
    ```

5. **Abre tu navegador**
    ```
    http://localhost:5173
    ```

## 📱 Funcionalidades Detalladas

### 🏪 Navegación y Catálogo

-   Filtrado por categorías dinámicas desde la base de datos
-   Visualización de productos en tarjetas responsivas
-   Navegación fluida con React Router

### 🛒 Gestión del Carrito

-   Agregar productos con cantidad personalizada
-   Incrementar/decrementar cantidades con confirmaciones
-   Eliminar productos individuales
-   Vaciar carrito completo
-   Persistencia del estado con Context API

### 💳 Proceso de Checkout

-   Formulario de datos del cliente con validación
-   Confirmación de compra con resumen del pedido
-   Integración con Firebase para guardar órdenes
-   Notificaciones de éxito y error

### 🔔 Sistema de Notificaciones

-   Toast notifications para todas las acciones del usuario
-   Confirmaciones interactivas para acciones críticas
-   Feedback visual inmediato

## 🎨 Diseño y UX

-   **Diseño responsive**: Optimizado para móviles, tablets y desktop
-   **CSS Modules**: Estilos encapsulados por componente
-   **Interfaz intuitiva**: Navegación clara y accesible
-   **Animaciones suaves**: Transiciones para mejorar la experiencia

## 📄 Licencia

Este proyecto fue desarrollado como parte del curso de React en Coderhouse.

## 👨‍💻 Autor

**Diego Carnevale**

-   GitHub: [@diegocb08](https://github.com/diegocb08)
