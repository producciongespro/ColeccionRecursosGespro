import React from "react";
import "./previas.css";
import { plataforma } from "../utils/utils";

function Previas(props) {
  //console.log("props.tabIndex", props.tabIndex);
  const item = props.item;
  const indice = props.indice;

  return (
    <div tabIndex={props.tabIndex} className="zoom">
      {plataforma() === "movil"
        ? props.modo === "coleccion" && (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img
                src={item.urlImg}
                className="img-fluid movil"
                alt={item.nombre}
                data-indice={indice}
              />
            </a>
          )
        : props.modo === "coleccion" && (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img
                src={item.urlImg}
                className="img-fluid"
                alt={item.nombre}
                data-indice={indice}
              />
            </a>
          )}
      {plataforma === "movil"
        ? props.modo === "avances" && (
            <img
              className="img-fluid movil"
              onClick={props.handleShow}
              src={item.urlImg}
              alt={item.nombre}
              data-seccion={item.seccion}
              data-indice={indice}
            />
          )
        : props.modo === "avances" && (
            <img
              className="img-fluid"
              onClick={props.handleShow}
              src={item.urlImg}
              alt={item.nombre}
              data-seccion={item.seccion}
              data-indice={indice}
            />
          )}
    </div>
  );
}

export default Previas;
