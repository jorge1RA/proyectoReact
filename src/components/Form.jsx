// Importa el hook useState de React
import { useState } from "react";

// Define un componente funcional llamado Form que acepta tres propiedades (setValueEmoji, toggleDarkMode, darkMode)
const Form = ({ setValueEmoji, toggleDarkMode, darkMode }) => {
    // Define dos estados locales usando el hook useState
    const [value, setValue] = useState(''); // Estado para almacenar el valor del input
    const [error, setError] = useState(false); // Estado para manejar el error de input vacío

    // Función para manejar la búsqueda de emoji
    const handleSearch = e => {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario
        if(value === ''){ // Comprueba si el input está vacío
            setError(true); // Establece el estado de error en true
            setTimeout(()=>setError(false), 2000); // Después de 2 segundos, establece el estado de error en false
            return; // Sale de la función
        }
        setValueEmoji(value); // Llama a la función setValueEmoji con el valor del input como argumento
        console.log(value); // Muestra el valor del input en la consola
    }

    // Función para mostrar todos los emojis
    const allEmojis = () => {
        setValueEmoji(''); // Llama a la función setValueEmoji con una cadena vacía como argumento para mostrar todos los emojis
    }

    // Retorna elementos JSX que representan el formulario de búsqueda de emojis
    return (
        <section className={`form ${darkMode?"dark-mode":""}`}>
            <form onSubmit={handleSearch}> {/* Maneja el evento submit del formulario */}
                <input 
                    type="text" 
                    placeholder="some emoji word..." 
                    onChange={e => setValue(e.target.value)} // Actualiza el estado 'value' con el valor del input
                />
                <button
                    type="button"
                    onClick={allEmojis} // Maneja el evento click del botón para mostrar todos los emojis
                >
                    All
                </button>
                {/* Componente para el interruptor de modo oscuro */}
                <div className="toggle-box" onClick={toggleDarkMode}>
                    <div className="toggle-circle"></div>
                </div>
            </form>
            {/* Muestra un mensaje de error si el input está vacío */}
            { error && <p className="error">Input is empty</p> }
        </section>
    );
}

// Exporta el componente Form para que pueda ser utilizado en otros archivos
export default Form;
