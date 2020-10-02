import React from 'react';
import './previas.css';

function Previas(props) {
    console.log("props.tabIndex", props.tabIndex);
    let item = props.item;

    return (
        <div tabIndex={props.tabIndex}  className="zoom">
            {
                props.modo === "coleccion" &&
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.urlImg} className="img-fluid" alt={item.nombre} data-seccion={item.seccion} />
                </a>
            }
            {
                props.modo === "avances" &&
                    <img className="img-fluid"
                    onClick={props.handleShow} 
                    src={item.urlImg} 
                    alt={item.nombre} 
                    data-seccion={item.seccion} 
                    data-url={item.url }
                    />
            }
        </div>
    );

}

export default Previas;