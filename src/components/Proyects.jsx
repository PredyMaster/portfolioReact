import React from "react";
import Proyect from "./Proyect";
import listWorks from "../listWorks";

const Proyects = () => {

    return(
        <div id="allWorks">

                { listWorks.works.map(works => (
                    <Proyect works={works} key={works.id}/>
                )) }

        </div>
    )
}

export default Proyects;