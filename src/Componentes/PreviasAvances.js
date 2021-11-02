import React from "react";
import "./previas.css";
import { plataforma } from "../utils/utils";

export default function PreviasAvances(props) {
  //console.log("props.tabIndex", props.tabIndex);
  const item = props.item;
  const indice = props.indice;

  return (
    <div tabIndex={props.tabIndex} className="zoom">
      {plataforma() === "movil" ? (
        <img
          src={item.urlImg}
          className="img-fluid movil"
          alt={item.nombre}
          data-indice={indice}
          onClick={props.mostrarModal}
        />
      ) : (
        <img
          src={item.urlImg}
          className="img-fluid"
          alt={item.nombre}
          data-indice={indice}
          onClick={props.mostrarModal}
        />
      )}
    </div>
  );
}
