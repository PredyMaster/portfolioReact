import React from "react";
import { NavLink } from 'react-router-dom';
import '../assets/css/header.css'

const Header = () => {
    
    return(

        <header className="header">
            <h1 className="h1Principal tracking-in-expand">JUANMA PASCUAL</h1>
            <h2 className="h2Principal tracking-in-expand">PORTFOLIO</h2>

            {/* Menu -->*/}
            <nav id="menu">
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/proyects?work=Clotilde" activeClassName="active">Trabajos</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/about" activeClassName="active">Sobre mi</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/contact" activeClassName="active">Contacto</NavLink>
                        </li>


                    </ul>
                </nav>
                {/* <hr className="hr" /> */}

                <div className="hr"></div>
        </header>

    )
}

export default Header;