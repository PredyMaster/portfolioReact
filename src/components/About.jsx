import React from "react";
import "../assets/css/about.css"
import about from "../about";
import react from "react";

const About = () => {

    return(
        <react.Fragment>
            <div className="aboutInfo">

                <div className="leftImage">
                    <img className="miImage scale-in-center" src={about.image} />
                </div>

                <div className="rightText">
                    <h1 className="h1 name">Diseñador gráfico <span className="and">&</span> Programador Front End</h1>
                    <h2 className="h2 work">Juanma Pascual</h2>
                </div>

                <div className="aboutDescription text-focus-in">
                    <p>¡Hola! Soy <span class="dest">Predy</span>. Desde siempre me ha interesado el arte en todas sus formas. Mi curiosidad y mi afán de aprendizaje me han llevado a tratar de entender y dominar campos como <span class="dest">la ilustración</span>, <span class="dest">la música</span>, <span class="dest">el vídeo</span> y <span class="dest">el 3D</span>.</p>

                    <p>Sé que estás buscando una etiqueta que atribuirme y un grupo en el cuál encasillarme, pero yo no funciono así. Simplemente me gusta pensar una idea, un objetivo, y trabajar hasta conseguir un contenido de gran valor.</p>

                    <p>No estoy a favor de los límites, mi meta es que mis trabajos impresionen e ilusionen a los clientes. Aportar un enfoque original es lo que me diferencia del resto, bueno... eso y que además aporto una personalidad <span class="dest">divertida</span> al grupo de trabajo.</p>

                    <p>¡Espero verte pronto!.</p>
                </div>

                <hr className="hrprincipal"></hr>

                <h3 className="h3">Conocimientos</h3>

                <div className="Conocimientos">
                    
                    <div class="contentSoftware">
                        <div class="bloque bloque1">
                            <b>Diseño</b>
                            <hr className="hrConocimientos" />
                            <p className="software">Adobe Photoshop</p>
                            <p className="software">Adobe Illustrator</p>
                        </div>

                        <div class="bloque bloque2">
                            <b>Video</b>
                            <hr className="hrConocimientos" />
                            <p className="software">Adobe After Effects</p>
                            <p className="software">Adobe Premiere Pro</p>
                            <p className="software">Adobe Media Encoder</p>
                        </div>
                        <div class="bloque bloque3">
                            <b>Sonido</b>
                            <hr className="hrConocimientos" />
                            <p className="software">Reaper</p>
                            <p className="software">Adobe Audition</p>
                        </div>
                        <div class="bloque bloque4">
                            <b>3D</b>
                            <hr className="hrConocimientos" />
                            <p className="software">Cinema4D</p>
                        </div>
                    </div>

                </div>


                <hr className="hrprincipal"></hr>


                <h3 className="h3">Lenguajes Front End</h3>

                <div className="Conocimientos">
                    
                    <div class="contentSoftware">
                        <div class="bloque bloque1">
                            <p className="software">HTML5</p>
                            <p className="software">CSS3</p>
                            <p className="software">Javascript</p>
                        </div>

                        <div class="bloque bloque2">
                            <p className="software">React</p>
                            <p className="software">jQuery</p>
                            <p className="software">Bootstrap</p>
                            
                        </div>
                        <div class="bloque bloque3">
                            <p className="software">SASS</p>
                            <p className="software">MySQL</p>
                            <p className="software">SQL</p>
                        </div>
                        <div class="bloque bloque4">
                            <p className="software">Git</p>
                            <p className="software">PHP</p>
                            <p className="software">Node.js</p>
                        </div>
                    </div>

                </div>




            </div>
        
        </react.Fragment>
    )
}

export default About;