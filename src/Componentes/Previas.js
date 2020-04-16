import React from 'react';



function Previas (props) {
    let item=props.item;

    return (
        <div className="zoom">                
            <img src={item.urlImg } alt={item.nombre} />
        </div>        
    );
    
}

export default Previas;