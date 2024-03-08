
// Define un componente funcional llamado Header
const Header = () => {
    // Retorna un elemento JSX que representa el encabezado de la aplicación
    return ( 
        <header className="hero">
            {/* Título principal del encabezado */}
            <h2>Buscador de Emojis 🧐</h2>
            {/* Subtítulo del encabezado */}
            <h3>Busca tu Emoji favorito...</h3>
        </header>
    );
}

// Exporta el componente Header para que pueda ser utilizado en otros archivos
export default Header;
