
//Actualización nueva 27/02/2024
// Define un componente funcional llamado Footer
const Footer = () => {
    // Retorna un elemento JSX que representa el pie de página de la aplicación
    return (  
        <footer>
            {/* Muestra información del autor */}
            <p className="author">🪐 by 
                {/* Enlace al perfil de GitHub de Daniel Silva */}
                <a href="https://github.com/dnlsilv" target="_blank" rel="noopener noreferrer">Daniel Silva</a> & 
                {/* Enlace al repositorio de GitHub de Jorge Romero */}
                <a href="https://github.com/jorge1RA/proyectoReact.git" target="_blank" rel="noopener noreferrer">Jorge Romero</a>
            </p>
        </footer>
    );
}

// Exporta el componente Footer para que pueda ser utilizado en otros archivos
export default Footer;
