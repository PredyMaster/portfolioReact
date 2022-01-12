import React from "react";
import '../assets/css/contact.css';

const Contact = () => {

    const mail = "JuanMailPascual "

    const runCallback = (cb) => {
        return cb();
    };

    return(

        <div className="Bloque_Contact">

            

            <div className="content">
                <span className="ContactCard">
                    <a href="mailto:juanmailpascual@gmail.com?subject=MailWeb%20-%20" target="_blank" rel="noreferrer">JuanMailPascual@gmail.com</a>
                </span>

                <p className="text-bg">
                { runCallback(() => {
                    const row = [];
                    for (var i = 0; i < 304; i++) {
                    row.push(<a className="minilink" href="mailto:juanmailpascual@gmail.com?subject=MailWeb%20-%20" target="_blank" rel="noreferrer" key={i}>{mail}</a>);
                    }
                    return row;
                }) }
                </p>
            </div>

            <h2 className="extraTextContact">No dudes en ponerte en contacto conmigo<br/> para cualquier consulta.</h2>

        </div>
        

    )
}

export default Contact;