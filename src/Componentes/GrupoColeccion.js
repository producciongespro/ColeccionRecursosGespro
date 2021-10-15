import React, { useState, useEffect } from "react";

import Coleccion from "./Coleccion";

function GrupoColeccion(props) {
  const recursos = props.recursos;
  const secciones = props.secciones;

  useEffect(() => {
    //console.log(secciones);
    setup();
  }, []);

  const setup = () => {
    let tmpArray = [];
    secciones.forEach((seccion) => {
      console.log(seccion.nombre);
      recursos.forEach((item) => {
        if (item.seccion === seccion.nombre) {
          tmpArray.push(item);
        }
      });
      console.log(tmpArray);
      tmpArray = [];
    });
  };

  return (
    <React.Fragment>
      {props.lista2021 && (
        <Coleccion
          tabIndex={5}
          titulo="Colección 2021"
          array={props.lista2021}
        />
      )}
      <br />
      {props.lista2020 && (
        <Coleccion
          tabIndex={6}
          titulo="Colección 2020"
          array={props.lista2020}
        />
      )}
      <br />
      {props.lista2019 && (
        <Coleccion
          tabIndex={7}
          titulo="Colección 2019"
          array={props.lista2019}
        />
      )}
      <br />
      {props.lista2018 && (
        <Coleccion
          tabIndex={8}
          titulo="Colección 2018"
          array={props.lista2018}
        />
      )}
      <br />
      {props.lista2017 && (
        <Coleccion
          tabIndex={9}
          titulo="Colección 2017"
          array={props.lista2017}
        />
      )}
      <br />
      {props.listaAnteriores && (
        <Coleccion
          tabIndex={10}
          titulo="Anteriores"
          array={props.listaAnteriores}
        />
      )}
      <br />
      {props.listaprofe && (
        <Coleccion
          tabIndex={11}
          titulo="Profe en casa"
          array={props.listaprofe}
        />
      )}
      <br />
      {props.listaOtros && (
        <Coleccion tabIndex={12} titulo="Otros" array={props.listaOtros} />
      )}
    </React.Fragment>
  );
}

export default GrupoColeccion;
