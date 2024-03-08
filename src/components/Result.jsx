// Importa la función searchEmoji desde el archivo '../helpers/searchEmoji'
import { searchEmoji } from "../helpers/searchEmoji";

// Importa el componente Item desde './Item'
import Item from "./Item";

// Define un componente funcional llamado Result que acepta dos propiedades (valueEmoji, darkMode)
const Result = ({ valueEmoji, darkMode }) => {
    // Llama a la función searchEmoji con el valor del emoji como argumento y almacena los resultados en arrayEmojis
    const arrayEmojis = searchEmoji(valueEmoji);

    // Retorna elementos JSX que representan los resultados de la búsqueda de emojis
    return (
        <section className="container results">
            {/* Mapea el array de emojis y muestra un componente Item para cada emoji */}
            {
                arrayEmojis && arrayEmojis.map(item => (
                    <Item
                        key={item.title} // Utiliza el título del emoji como clave
                        title={item.title} // Pasa el título del emoji como propiedad al componente Item
                        emoji={item.symbol} // Pasa el símbolo del emoji como propiedad al componente Item
                        darkMode={darkMode} // Pasa el estado de darkMode como propiedad al componente Item
                    />
                ))
            }
        </section>
    );
}

// Exporta el componente Result para que pueda ser utilizado en otros archivos
export default Result;
