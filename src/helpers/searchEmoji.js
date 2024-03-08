// Importa la lista de emojis desde el archivo 'emojiList.json'
import emojiList from "./emojiList.json"

// Define una función llamada searchEmoji que acepta un valor de búsqueda como argumento
export const searchEmoji = (value) => {
    // Convierte el valor de búsqueda a minúsculas para una comparación insensible a mayúsculas y minúsculas
    const lowerValue = value.toLowerCase();
    
    // Declara un array vacío para almacenar los emojis que coincidan con el valor de búsqueda
    const response = [];

    // Itera sobre cada emoji en la lista de emojis
    emojiList.map(item => {
        // Comprueba si los términos de búsqueda están incluidos en las palabras clave del emoji
        if (item.keywords.includes(lowerValue)) {
            // Si hay coincidencia, agrega el emoji al array de respuesta
            response.push(item);
        }
    })

    // Retorna los emojis que coinciden con el valor de búsqueda si el valor no está vacío,
    // de lo contrario, devuelve todos los emojis o los primeros 24 emojis
    return value === "" ? response : response.slice(0, 24);
}
