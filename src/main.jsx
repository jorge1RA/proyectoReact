// Importa la biblioteca principal de React
import React from 'react'

// Importa el método de renderizado de ReactDOM para renderizar componentes en el DOM
import ReactDOM from 'react-dom/client'

// Importa el componente principal de la aplicación desde './App'
import App from './App'

// Importa los estilos de índice
import './index.css'

// Crea un punto de entrada para el árbol de componentes React en el elemento con el ID 'root' del DOM
// y renderiza el componente 'App' dentro de un <React.StrictMode>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

