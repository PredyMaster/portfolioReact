import { useState } from 'react';
import '../assets/css/proyects.css';
import { NavLink } from 'react-router-dom';

const Proyect = (works) => {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);
    
    return (
        <NavLink exact to={`/proyects?work=${works.works.urlName}`} className="linkProyect scale-in-center" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <img className={hovered ? 'imgProyect Desaturate' : 'imgProyect'} src={works.works.path} alt={works.works.name} />
            <div className={hovered ? 'Overlay swing-in-top-fwd' : 'Overlay'}>
                <div className="subOverlay">
                    <h3 className="overlayTitle">{works.works.name}</h3>
                    <p className="overlayClient"><span className="cliente">cliente:</span> {works.works.client}</p>
                </div>                
            </div>
        </NavLink> 
    )
}

export default Proyect;

