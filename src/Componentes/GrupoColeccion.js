import React, { useState, useEffect } from "react";

import Coleccion from "./Coleccion";

function GrupoColeccion(props) {
  const recursos = props.recursos;
  const secciones = props.secciones;
  //Arreglo de arreglos con recursos por colección. Se carga en setup pAra luego ser renderizado en componente (return)
  //let vistasColecciones = [];
  const [vistasColecciones, setVistasColecciones] = useState([]);

  useEffect(() => {
    //console.log(secciones);
    console.log("iniciando componente grupo");
    setup();
  }, []);

  const setup = () => {
    let tmpArray = [];
    secciones.forEach((seccion) => {
      //console.log(seccion.nombre);
      recursos.forEach((item) => {
        if (item.seccion === seccion.nombre) {
          tmpArray.push(item);
        }
      });
      //console.log(tmpArray);
      //vistasColecciones.push(tmpArray);
      setVistasColecciones(vistasColecciones.concat(tmpArray));
      tmpArray = [];
    });
    console.log("setup terminado");
    //console.log("vistasColecciones", vistasColecciones);
  };

  return (
    vistasColecciones &&
    vistasColecciones.map((item, i) => (
      <Coleccion
        tabIndex={i + 1}
        key={i}
        //titulo={`Colección ${secciones[i].nombre}`}
        titulo="prb"
        array={item}
      />
    ))
  );
}

export default GrupoColeccion;
