import React, { useState, useEffect } from "react";

import Coleccion from "./Coleccion";

function GrupoColeccion(props) {
  const recursos = props.recursos;
  const secciones = props.secciones;
  //Arreglo de arreglos con recursos por colección. Se carga en setup pAra luego ser renderizado en componente (return)
  //let vistasColecciones = [];
  const [vistasColecciones, setVistasColecciones] = useState(null);

  useEffect(() => {
    //console.log(secciones);
    console.log("iniciando componente grupo");
    setup();
  }, []);


  useEffect(() => {
      console.log("vistasColecciones", vistasColecciones);
  }, [vistasColecciones]);

  const setup = () => {
    let tmpArray = [];
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
    setVistasColecciones(tmpVistasColecciones);
    //console.log("vistasColecciones", vistasColecciones);
  };

  return (      
    vistasColecciones &&
    vistasColecciones.map((item, i) => (    
      <Coleccion
        tabIndex={i + 1}
        key={i}
        titulo={`Colección ${secciones[i].nombre}`}        
        array={item}
      />      
    ))
  );
}

export default GrupoColeccion;
