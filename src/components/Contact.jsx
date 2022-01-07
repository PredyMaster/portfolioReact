import React from "react";
import '../assets/css/contact.css'

const Contact = () => {

    const mail = "JuanMailPascual "

    const runCallback = (cb) => {
        return cb();
    };

    return(

        <div className="Bloque_Contact">

            

            <div className="content">
                <span className="ContactCard">
                    <a href="#">JuanMailPascual@gmail.com</a>
                </span>

                <p className="text-bg">
                { runCallback(() => {
                    const row = [];
                    for (var i = 0; i < 305; i++) {
                    row.push(<span key={i}>{mail}</span>);
                    }
                    return row;
                }) }
                </p>
            </div>

        </div>
        

    )
}

export default Contact;