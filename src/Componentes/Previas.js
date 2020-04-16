import React from 'react';
import './previas.css';

function Previas (props) {
    let item=props.item;

    return (
        <div className="zoom">
            <a href={item.url} target="_blank" rel="noopener noreferrer">                
                <img src={item.urlImg } alt={item.nombre} />
            </a>
        </div>        
    );
    
}

export default Previas;