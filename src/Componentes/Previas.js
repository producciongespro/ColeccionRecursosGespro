import React from 'react';
import './previas.css';

function Previas(props) {
    let item = props.item;

    return (
        <div className="zoom">
            {
                props.modo === "coleccion" &&
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.urlImg} alt={item.nombre} data-seccion={item.seccion} />
                </a>
            }
            {
                props.modo === "avances" &&
                <img src={item.urlImg} alt={item.nombre} data-seccion={item.seccion} />
            }
        </div>
    );

}

export default Previas;