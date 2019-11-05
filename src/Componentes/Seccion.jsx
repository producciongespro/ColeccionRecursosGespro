import React from 'react';

const Seccion = (props) => {
    return ( 
        <section id={"seccion" + props.numSeccion  }>
        <a className="a-seccion" href={"#seccion" + props.anterior }>‹</a>
          {
            props.array.map((item, i) =>(
              item.seccion === props.numSeccion && (
                <div className="item" key={"seccion_"+ props.numSeccion +i } >
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.urlImg } alt={item.nombre}/></a>
                </div>
              )              
            ))
          }
       <a className="a-seccion" href={"#seccion" + props.siguiente }> › </a>
      </section>
     );
}
 
export default Seccion;