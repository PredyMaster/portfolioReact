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

            if(workURL == null && works.id == 1){ setSelecJSON(works) }

            if(works.urlName == workURL){ setSelecJSON(works) }

            if(Number(works.id) == calculaSiguiente()){ setNextJSON(works) }

            if(Number(works.id) == calculaAnterior()){ setPreviousJSON(works) }
            
        }) 

    }); 



    return(
        <div className='FullContentProyect'>
            <div className="infoProyect">

                <div className="navigationProyects">
                    <button className="navLeft miButton" onClick={handlePrev}>Anterior</button>
                    <button className="navRight miButton" onClick={handleNext}>Siguiente</button>
                </div>
                
                <div className="proyectCoverImage">
                    <img loading="lazy" className="TestImage" src={selectJSON.path} />
                </div>
                
                <div className="proyectTit">
                    <h2 className="h2">{selectJSON.name}</h2>
                    <h4 className="h4">Cliente: {selectJSON.client}</h4>
                    <p className="description"> {selectJSON.description}</p>
                </div>
                
                {/* <p>Item anterior: {previousJSON.id + previousJSON.urlName} / Item actual: {selectJSON.id + selectJSON.urlName} / Item siguiente: {nextJSON.id + nextJSON.urlName}</p> */}
                
                
            </div>   

            

            {selectJSON.video &&

                <React.Fragment>
                    <div className="hr"></div>

                    <div className="videoSection">
                        {/* <video poster={selectJSON.thumb} controls="" data-video="0">
                        <source src={selectJSON.video} type="video/mp4">
                            Tu navegador no carga videos, actualizate.
                        </source>
                    </video> */}
                        <video className="video" poster={selectJSON.thumb} src={selectJSON.video} controls="controls">Tu no navegador no carga videos, ¿en que año vives? actualízate</video>

                    </div>

                    <div className="hr"></div>
                
                </React.Fragment>

            }

            
            

        </div>

    )
}

export default FullProyect;