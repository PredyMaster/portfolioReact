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
                    for (var i = 0; i < 304; i++) {
                    row.push(<a className="minilink" href="mailto:juanmailpascual@gmail.com" target="_blank" key={i}>{mail}</a>);
                    }
                    return row;
                }) }
                </p>
            </div>

        </div>
        

    )
}

export default Contact;