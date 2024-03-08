// Importa el hook useState de React
import { useState } from "react";

// Define un componente funcional llamado Item que acepta tres propiedades (title, emoji, darkMode)
const Item = ({ title, emoji, darkMode }) => {
    // Define un estado local usando el hook useState para controlar si el emoji ha sido copiado
    const [copy, setCopy] = useState(false);
    
    // Función para manejar la copia del emoji al portapapeles
    const handleCopy = () => {
        setCopy(true); // Establece el estado de copia en true
        navigator.clipboard.writeText(emoji); // Copia el emoji al portapapeles
        setTimeout(() => setCopy(false), 3000); // Después de 3 segundos, establece el estado de copia en false
    }

    // Retorna elementos JSX que representan un ítem de emoji
    return (
        <article className={`card-emoji ${darkMode?"dark-mode":""}`}>
            {/* Muestra el emoji y maneja el evento onClick para copiarlo al portapapeles */}
            <p 
                className="emoji-icon"
                onClick={handleCopy}    
            >{emoji}
            </p>
            {/* Muestra el título del ítem */}
            <h4>{title}</h4>
            {/* Muestra un mensaje "Copied!" si el emoji ha sido copiado */}
            { copy && <p className="copied">Copied!</p> }
        </article>
    );
}

// Exporta el componente Item para que pueda ser utilizado en otros archivos
export default Item;
