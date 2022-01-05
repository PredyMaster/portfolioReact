import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import listWorks from '../listWorks';

const FullProyect = (jsonParams) => {

    const { nameProyect } = useParams();
    const [ selectJSON, setSelecJSON] = useState({});
    const [ previousJSON, setPreviousJSON] = useState({});
    const [ nextJSON, setNextJSON] = useState({});
    const selectProyect = jsonParams.location.state.selectProyect;

    const calculaSiguiente = () => {
        if(selectProyect.id == listWorks.works.length){
            return(1);
        }else{
            return(Number(selectProyect.id) + 1)
        }
    }

    const calculaAnterior = () => {
        if(selectProyect.id == 1){
            return(listWorks.works.length);
        }else{
            return(Number(selectProyect.id) - 1)
        }
    }

    useEffect(() => {
        listWorks.works.map(works => {

            if(works.urlName == nameProyect){
                setSelecJSON(works);
            }

            if(Number(works.id) == calculaSiguiente()){
                setNextJSON(works);
            }

            if(Number(works.id) == calculaAnterior()){
                setPreviousJSON(works);
            }
            
        }) 

        console.log("useEffect");
    });


    
    


    /* const jsonProyect = {}; */

    /* listWorks.works.map(works => {
        console.log(works);
    })  */


    /* const {id} = useParams(); */

    /* console.log(selectProyect); */

    console.log(previousJSON);
    console.log(selectJSON);
    console.log(nextJSON);



    return(
        <div className="centTemp">
            {/* <h4>fullProyectorrr</h4>
            <p>{selectJSON.id}</p>
            <p>{selectJSON.client}</p>
            <p>{selectJSON.name}</p>
            <p>{selectJSON.description}</p> */}


            <p>Item anterior: {previousJSON.id + previousJSON.urlName}</p>
            <p>Item actual: {selectJSON.id + selectJSON.urlName}</p>
            <p>Item siguiente: {nextJSON.id + nextJSON.urlName}</p>
            
        </div>        

    )
}

export default FullProyect;