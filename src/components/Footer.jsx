import React from "react";
import '../assets/css/Footer.css'
import logo_Predy from '../assets/images/generic/Predy_logo.svg';
import IcoBehance from '../assets/images/generic/IcoBehance.png';
import IcoLinke from '../assets/images/generic/IcoLinke.png';

const Footer = () => {
    
    return(
        <React.Fragment>
            <div className="scrollContent">
                <a className="scrollUp" alt="scroll up" href ="#">➜</a>
            </div>

            <footer className="footer">
                <a href="https://www.behance.net/predy"  target="_blank" rel="noreferrer"><img className="IcoBehance iconRedesS" alt="ico Behance" src={IcoBehance} /></a>
                <a href="https://www.youtube.com/watch?v=qCpazlUJSEg" target="_blank" rel="noreferrer"><img className="logo_Predy" alt="logo Predy" src={logo_Predy} /></a>
                <a href="https://www.linkedin.com/in/juanma-pascual" target="_blank" rel="noreferrer"><img className="IcoLinke iconRedesS" alt="ico Linkedin" src={IcoLinke} /></a>
            </footer>
        </React.Fragment>
    )
}

export default Footer;