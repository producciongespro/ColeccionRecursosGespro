import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

import Coleccion from "./Coleccion";

function GrupoColeccion(props) {
  const recursos = props.recursos;
  //Array de colecciones por ejemplo 2021, profe en casa, etc
  const secciones = props.secciones;

  //Arreglo de arreglos con recursos por colección. Se carga en setup pAra luego ser renderizado en componente (return)
  //let vistasColecciones = [];
  const [vistasColecciones, setVistasColecciones] = useState(null);

  useEffect(() => {
    //console.log(secciones);
    console.log("iniciando componente grupo");
    setup();
  }, []);



  const setup = () => {
    let tmpArray = [];
    //Creación de aarry tmp para poder hacerle el push con un areglo de una colección
    //cuando se han insertado todos los areglos se inserta en el estado ya uqe con la estrategia 
    // setVistasColecciones (vistasColecciones.concat(tmpArray)) concatena todo en un solo array sin 
    //distigniguir secciones
    let tmpVistasColecciones=[];
    secciones.forEach((seccion) => {
      //console.log(seccion.nombre);
      recursos.forEach((item) => {
        if (item.seccion === seccion.nombre) {
          tmpArray.push(item);
        }
      });
      //console.log(tmpArray);
      tmpVistasColecciones.push(tmpArray);      
      tmpArray = [];
    });
    console.log("setup terminado");
    //Se tiene que utlizar un estado ya que si es usa una variable esta no carga de inemediato
    //Al parecer estos ciclos anidados toman un tiempo
    setVistasColecciones(tmpVistasColecciones);
    //console.log("vistasColecciones", vistasColecciones);
  };

  return ( 
      <> 
      {    
    vistasColecciones ?
    vistasColecciones.map((item, i) => (    
      <Coleccion
        tabIndex={i + 1}
        key={i}
        titulo={`Colección ${secciones[i].nombre}`}        
        array={item}
      />      
    )) :
    <div className="row">
        <div className="col-12 alert alert-success">
            Acomodando las categorías....
        </div>
    </div>
    }
    </>     
  );
}

export default GrupoColeccion;
