import React from 'react';

const Seccion = (props) => {
    return ( 
        <section id={"seccion" + props.numSeccion  }>
        <a href={"#seccion" + props.anterior }>‹</a>
          {
            props.array.map((item, i) =>(
              item.seccion === props.numSeccion && (
                <div className="item" key={"seccion_"+ props.numSeccion +i } >
                    <img src={item.urlImg } alt={item.etiqueta} />
                </div>
              )              
            ))
          }
       <a href={"#seccion" + props.siguiente }> › </a>
      </section>
     );
}
 
export default Seccion;