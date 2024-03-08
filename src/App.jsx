import { useState } from 'react'; // Importa el hook useState desde React
import './App.css'; // Importa los estilos CSS para la aplicación
import Footer from './components/Footer'; // Importa el componente Footer
import Form from './components/Form'; // Importa el componente Form
import Header from './components/Header'; // Importa el componente Header
import Result from './components/Result'; // Importa el componente Result

function App() {
  // Define dos estados utilizando el hook useState
  const [valueEmoji, setValueEmoji] = useState('fruit'); // Estado para el valor del emoji, inicializado con 'fruit'
  const [darkMode, setDarkMode] = useState(false); // Estado para el modo oscuro, inicializado como falso

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(current => !current); // Invierte el valor actual del modo oscuro
  }

  // Renderiza el componente de la aplicación
  return (
    <div className={`App ${darkMode ? "darkbg" : ""}`}> {/* Clase condicional basada en el estado del modo oscuro */}
      <Header/> {/* Renderiza el componente Header */}
      <Form 
        setValueEmoji={setValueEmoji} // Propiedad para establecer el valor del emoji en el componente Form
        toggleDarkMode={toggleDarkMode} // Propiedad para alternar el modo oscuro en el componente Form
        darkMode={darkMode} // Propiedad para pasar el estado del modo oscuro al componente Form
      />
      <Result valueEmoji={valueEmoji} darkMode={darkMode}/> {/* Renderiza el componente Result */}
      <Footer/> {/* Renderiza el componente Footer */}
    </div>
  )
}

export default App; // Exporta el componente App como el componente principal de la aplicación

