import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import listWorks from '../listWorks';
import '../assets/css/fullProyect.css';

const FullProyect = (jsonParams) => {

    const [ selectJSON, setSelecJSON] = useState({});
    const [ previousJSON, setPreviousJSON] = useState({});
    const [ nextJSON, setNextJSON] = useState({});

    let {search} = useLocation();
    let query = new URLSearchParams(search);
    let workURL = query.get('work');
    let history = useHistory()

    const handlePrev = () => { history.push({search: `?work=${previousJSON.urlName}`}) }
    const handleNext = () => { history.push({search: `?work=${nextJSON.urlName}`}) } 

    const calculaSiguiente = () => {      
        if(parseInt(selectJSON.id) === listWorks.works.length){
            return(1);
        }else{
            return(Number(selectJSON.id) + 1)
        }
    }
   
    const calculaAnterior = () => {
        if(selectJSON.id === 1){
            return(listWorks.works.length);
        }else{
            return(Number(selectJSON.id) - 1)
        }
    }

    useEffect(() => {

        console.log("UseEffect en FullProyect");
        console.log(selectJSON.name);
        console.log("---------------------------");

        listWorks.works.map(works => {

            if(workURL === null || works.id === 1){ setSelecJSON(works);}

            if(works.urlName === workURL){ setSelecJSON(works) }

            if(Number(works.id) === calculaSiguiente()){ setNextJSON(works) }

            if(Number(works.id) === calculaAnterior()){ setPreviousJSON(works) }
            
            return null;
        }) 

    }); 



    return(
        <div className='FullContentProyect'>
            <div className="infoProyect">

                <div className="navigationProyects">
                    <button className="navLeft miButton" onClick={handlePrev}>Anterior</button>

                    <img alt="Thumbnail" className="TestImage scale-in-center" src={selectJSON.path} />

                    <button className="navRight miButton" onClick={handleNext}>Siguiente</button>
                </div>
                
                <div className="proyectTit">
                    <h2 className="h2">{selectJSON.name}</h2>
                    <h4 className="h4FullProyect">Cliente: <span className='cliente'>{selectJSON.client}</span></h4>
                    <p className="description">{selectJSON.description}</p>
                    <p className="description">{selectJSON.description2}</p>
                    <p className="description">{selectJSON.description3}</p>
                    <p className="description">{selectJSON.description4}</p>

                </div>                
                
            </div>   
           
            <div className="spaceVideos"></div>

            
            {selectJSON.video &&

                <React.Fragment>
                    

                    {selectJSON.hasOwnProperty("video") &&
                        <React.Fragment>
                            <div className="videoSection">
                                <video className="video" poster={selectJSON.thumb} src={selectJSON.video} controls="controls">Tu no navegador no carga videos, ¿en que año vives? actualízate</video>
                            </div>

                            <div className="spaceVideos"></div>
                    </React.Fragment>            
                    }

                    {selectJSON.hasOwnProperty("video2") &&
                        <React.Fragment>
                            <div className="videoSection">
                                <video className="video" poster={selectJSON.thumb2} src={selectJSON.video2} controls="controls">Tu no navegador no carga videos, ¿en que año vives? actualízate</video>
                            </div>

                            <div className="spaceVideos"></div>
                    </React.Fragment>            
                    }

                    {selectJSON.hasOwnProperty("video3") &&
                        <React.Fragment>
                            <div className="videoSection">
                                <video className="video" poster={selectJSON.thumb3} src={selectJSON.video3} controls="controls">Tu no navegador no carga videos, ¿en que año vives? actualízate</video>
                            </div>

                            <div className="spaceVideos"></div>
                        </React.Fragment>            
                    }

                    

                    {selectJSON.hasOwnProperty("video4") &&
                        <React.Fragment>
                            <div className="videoSection">
                                <video className="video" poster={selectJSON.thumb4} src={selectJSON.video4} controls="controls">Tu no navegador no carga videos, ¿en que año vives? actualízate</video>
                            </div>

                            <div className="spaceVideos"></div>
                        </React.Fragment>            
                    }
                    
                
                </React.Fragment>

            }

            {selectJSON.img1 &&
                <img loading="lazy" className='img1_FullProyect imgsFullPoyects' alt={selectJSON.name} src={selectJSON.img1} />
            }

            {selectJSON.img2 &&
                <img loading="lazy" className='img2_FullProyect imgsFullPoyects' alt={selectJSON.name} src={selectJSON.img2} />
            }

            {selectJSON.img3 &&
                <img loading="lazy" className='img3_FullProyect imgsFullPoyects' alt={selectJSON.name} src={selectJSON.img3} />
            }

            {selectJSON.img4 &&
                <img loading="lazy" className='img4_FullProyect imgsFullPoyects' alt={selectJSON.name} src={selectJSON.img4} />
            }

            {selectJSON.img5 &&
                <img loading="lazy" className='img5_FullProyect imgsFullPoyects' alt={selectJSON.name} src={selectJSON.img5} />
            }

            {selectJSON.img6 &&
                <img loading="lazy" className='img6_FullProyect imgsFullPoyects' alt={selectJSON.name} src={selectJSON.img6} />
            }
            

            
        </div>

    )
}

export default FullProyect;