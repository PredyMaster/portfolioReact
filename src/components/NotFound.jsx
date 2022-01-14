import React from "react";
import '../assets/css/NotFound.css';

const NotFound = () => {

    return(
        <div className="ErrorBloque">
            
                <img className="ErrorImage" src="https://predy.es/WebPredy_Backup_JSvanilla/images/Error_Cat.jpg" alt="Error cat" />
            <div className="ErrorContent">    
                <p className="Error_title">Error 404</p>
                <p className="Pagina_NoEncontrada">Página no encontrada</p>
            </div>             
        </div>       
    )
}

export default NotFound;