import React from "react";
import "../assets/css/about.css"
import about from "../about";
import react from "react";

const About = () => {

    return(
        <react.Fragment>
            <div className="aboutInfo">

                <div className="leftImage">
                    <img className="miImage" src={about.image} />
                </div>

                <div className="rightText">
                    <h1 className="h1 name">Juanma Pascual</h1>
                    <h2 className="h2 work">Diseñador gráfico & Desarrollador FrontEnd</h2>
                    <p className="description"> oooo</p>
                </div>

                <div className="aboutDescription">
                    <p>¡Hola! Soy <span class="dest">Predy</span>. Desde siempre me ha interesado el arte en todas sus formas. Mi curiosidad y mi afán de aprendizaje me han llevado a tratar de entender y dominar campos como <span class="dest">la ilustración</span>, <span class="dest">la música</span>, <span class="dest">el vídeo</span> y <span class="dest">el 3D</span>.</p>

                    <p>Sé que estás buscando una etiqueta que atribuirme y un grupo en el cuál encasillarme, pero yo no funciono así. Simplemente me gusta pensar una idea, un objetivo, y trabajar hasta conseguir un contenido de gran valor.</p>

                    <p>No estoy a favor de los límites, mi meta es que mis trabajos impresionen e ilusionen a los clientes. Aportar un enfoque original es lo que me diferencia del resto, bueno... eso y que además aporto una personalidad <span class="dest">divertida</span> al grupo de trabajo.</p>

                    <p>¡Espero verte pronto!.</p>
                </div>

                <hr className="hr"></hr>

                <h3 className="h3">Conocimientos</h3>

                <div className="Conocimientos">
                    
                    <div class="contentSoftware">
                        <div class="bloque bloque1">
                            <b>Diseño</b>
                            <hr />
                            <p className="software">Adobe Photoshop</p>
                            <p className="software">Adobe Illustrator</p>
                        </div>

                        <div class="bloque bloque2">
                            <b>Video</b>
                            <hr />
                            <p className="software">Adobe After Effects</p>
                            <p className="software">Adobe Premiere Pro</p>
                            <p className="software">Adobe Media Encoder</p>
                        </div>
                        <div class="bloque bloque3">
                            <b>Sonido</b>
                            <hr />
                            <p className="software">Reaper</p>
                            <p className="software">Adobe Audition</p>
                        </div>
                        <div class="bloque bloque4">
                            <b>3D</b>
                            <hr />
                            <p className="software">Cinema4D</p>
                        </div>
                    </div>

                </div>

            </div>
        
        </react.Fragment>
    )
}

export default About;