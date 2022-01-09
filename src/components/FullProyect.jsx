import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import listWorks from '../listWorks';
import '../assets/css/fullProyect.css';

const FullProyect = (jsonParams) => {

    const { nameProyect } = useParams();
    const [ nameURL, setNameUrl] = useState({});
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
        if(selectJSON.id == listWorks.works.length){
            return(1);
        }else{
            return(Number(selectJSON.id) + 1)
        }
    }
   
    const calculaAnterior = () => {
        if(selectJSON.id == 1){
            return(listWorks.works.length);
        }else{
            return(Number(selectJSON.id) - 1)
        }
    }

    useEffect(() => {
        
        listWorks.works.map(works => {

            if(workURL === null || works.id === 1){ setSelecJSON(works); console.log("bingo") }

            if(works.urlName === workURL){ setSelecJSON(works) }

            if(Number(works.id) === calculaSiguiente()){ setNextJSON(works) }

            if(Number(works.id) === calculaAnterior()){ setPreviousJSON(works) }
            
        }) 

    }); 



    return(
        <div className='FullContentProyect'>
            <div className="infoProyect">

                <div className="navigationProyects">
                    <button className="navLeft miButton" onClick={handlePrev}>Anterior</button>

                    <img loading="lazy" alt="Thumbnail" className="TestImage scale-in-center" src={selectJSON.path} />

                    <button className="navRight miButton" onClick={handleNext}>Siguiente</button>
                </div>
                
                {/* <div className="proyectCoverImage">
                    <img loading="lazy" className="TestImage" src={selectJSON.path} />
                </div> */}
                
                <div className="proyectTit">
                    <h2 className="h2">{selectJSON.name}</h2>
                    <h4 className="h4FullProyect">Cliente: <span className='cliente'>{selectJSON.client}</span></h4>
                    <p className="description">{selectJSON.description}</p>
                </div>
                
                {/* <p>Item anterior: {previousJSON.id + previousJSON.urlName} / Item actual: {selectJSON.id + selectJSON.urlName} / Item siguiente: {nextJSON.id + nextJSON.urlName}</p> */}
                
                
            </div>   
           
            

            
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
                <img className='img1_FullProyect imgsFullPoyects' src={selectJSON.img1} />
            }

            {selectJSON.img2 &&
                <img className='img2_FullProyect imgsFullPoyects' src={selectJSON.img2} />
            }

            {selectJSON.img3 &&
                <img className='img3_FullProyect imgsFullPoyects' src={selectJSON.img3} />
            }

            {selectJSON.img4 &&
                <img className='img4_FullProyect imgsFullPoyects' src={selectJSON.img4} />
            }

            {selectJSON.img5 &&
                <img className='img5_FullProyect imgsFullPoyects' src={selectJSON.img5} />
            }

            {selectJSON.img6 &&
                <img className='img6_FullProyect imgsFullPoyects' src={selectJSON.img6} />
            }
            

            
        </div>

    )
}

export default FullProyect;