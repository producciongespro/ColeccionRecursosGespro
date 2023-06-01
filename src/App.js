import React, { useState, useEffect } from "react";

import GrupoColeccion from "./Componentes/GrupoColeccion";
import Coleccion from "./Componentes/Coleccion";
import Avances from "./Componentes/Avances";

import endpoints from "./endpoints";
import * as utils from "./utils/utils";

//Variable que alamcena los recursos obtendios desde el srvidor
//En setup se le asigna a filtrados o en caso de que el usuario oculte lo búsqueda.
let recursos = null;

function App() {
  // Array principal que alimenta el componente para renderizar los recuros
  //Este estado varia dependiendo de la b´suqueda del usuario:
  const [filtrados, setFiltrados] = useState(null);
  //Palabra que digita el usuario en la caja de txt para búsuqedas:
  const [palabraBusqueda, setPalabraBusuqeda] = useState("");
  //Bandera que indica si está en modo búsqueda. Esto para desplegar una interfaz gráfica diferente:
  const [isBusqueda, setIsBusqueda] = useState(false);
  //categorías de las colecciones para el renderizado de recursos según colección
  const [secciones, setSecciones] = useState(null);
  //Registro de avances
  const [avances, setAvances] = useState(null);

  useEffect(() => {
    setup();
  }, []);

  const setup = async () => {
    console.log("apuntando en servidor", process.env.REACT_APP_URI_API);
    setSecciones(await utils.getData(endpoints.obtenerSecciones));
    let res = await utils.getData(endpoints.obtenerRecursos);
    console.log("res", res);
    //TODO verficar si esto se puede omitir:
    recursos = utils.jsonParser(res);
    setFiltrados(recursos);
    setAvances(await utils.getData(endpoints.obtenerAvances));
  };

  const handleActivarBusqueda = () => {
    setIsBusqueda(!isBusqueda);
  };

  const handleBuscar = (e) => {
    setFiltrados(utils.busquedaAvanzada(recursos, e.target.value));
    //Se almacena la palabra en estado para oder contorlar el momento
    //en que se carga el grupo de colección (Que sería cuando la palabra está vacía)
    setPalabraBusuqeda(e.target.value);
  };

  return (
    <div className="App container">
      {utils.plataforma() === "movil" ? (
        // <div tabIndex="1"  role="heading" aria-level="1" title="Colección recursos"  className="jumbotron"> </div>
        <div className="img-fluid">
          <img
            className="imgbanner"
            src="./assets/img/interfaz/banner.jpg"
            alt="baner colección"
          />
        </div>
      ) : (
        <div
          tabIndex="1"
          role="heading"
          aria-level="1"
          title="Colección recursos"
          className="jumbotron"
        ></div>
      )}
      {/* Sección de acerca de*/}
      {utils.plataforma() === "movil" ? (
        <div className="row text-end">
          <div className="col-12">
            <a
              href="https://recursos.mep.go.cr/creditos_gespro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="movil2"
                src="./assets/img/interfaz/acerca.png"
                alt="Acerca de"
              />
            </a>
          </div>
        </div>
      ) : (
        <div tabIndex="2">
          <div className="row text-end">
            <div className="col-10">
              <a
                href="https://recursos.mep.go.cr/creditos_gespro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="acerca img-fluid zoom"
                  role="button"
                  src="./assets/img/interfaz/acerca.png"
                  alt="Acerca de"
                />
              </a>
            </div>

            <div className="col-2">
              <a
                title="Calificame"
                target="_blank"
                href="https://recursos.mep.go.cr/0_calificame/app/index.html?id_app=400"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid"
                  //style={{marginLeft: "18px"}}
                  src="./assets/img/calificame_byn.png"
                  alt="Califícame"
                />
              </a>
            </div>
          </div>
        </div>
      )}
      {/* Sección de búsqueda de recursos*/}
      <div className="row mt-2">
        <div tabIndex="3" className="col-6 text-end">
          <button
            onClick={handleActivarBusqueda}
            className="btn btn-outline-dark"
          >
            {!isBusqueda ? (
              <img
                className="img-1"
                src="./assets/img/lupa2.png"
                alt="buscar"
              />
            ) : (
              <img
                className="img-1"
                src="./assets/img/cancel.png"
                alt="buscar"
              />
            )}
          </button>
        </div>

        {isBusqueda && (
          <div tabIndex="3" className="col-6 fondo-claro">
            <input
              alt="Escriba la palabra para búsqueda"
              onChange={handleBuscar}
              className="form-control"
              type="text"
              id="txtBuscar"
              placeholder="Digite la palabra(s) o frase a buscar"
            />
          </div>
        )}
      </div>
      <br />
      <br />
      {/* Sección de avacnces*/}
      {!isBusqueda && avances && (
        <div tabIndex="4" className="row" role="button">
          <div className="col-12">
            <Avances tabIndex="2" avances={avances} />
          </div>
        </div>
      )}
      <br />
      <br /> <br />
      {/* Sección de búsqueda de cada categoría*/}
      {filtrados && palabraBusqueda !== "" && isBusqueda && (
        <Coleccion tabIndex={4} titulo="Búsqueda" array={filtrados} />
      )}
      {
        /** Cuerpo principal de la interfaz con todos los recursos por colecciones */
        filtrados && secciones && !isBusqueda ? (
          <GrupoColeccion recursos={filtrados} secciones={secciones} />
        ) : (
          <div className="row">
            <div className="col-12 alert alert-info">
              Cargando información, por favor espere...
            </div>
          </div>
        )
      }
      <div tabIndex="13" className="row mt-4">
        <div className="col-sm-12">
          <div className="alert nota">
            Nota: <strong>Algunos recursos </strong> están siendo actualizados
            debido a que fueron programados en Adobe Flash, una tecnología
            obsoleta en estos momentos.
          </div>
        </div>
      </div>
      <div tabIndex="14" className="row mt-4">
        <div className="col-sm-12">
          <div className="alert alert-info infoen">
            Si <strong>no</strong> ha encontrado el recurso relacionado con la
            temática o contendio que buscaba, puede dar clic{" "}
            <a
              href="http://www.encuesta.mep.go.cr/index.php/681422?lang=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong className="enlaceAqui">AQUÍ</strong>
            </a>{" "}
            para que nos lo indique.
          </div>
        </div>
      </div>
      {/* Sección pie de página*/}
      <div tabIndex="15" className="col-12 text-center pie">
        <span>
          DIRECCIÓN DE RECURSOS TECNOLÓGICOS EN EDUCACIÓN DEL MINISTERIO DE
          EDUCACIÓN PÚBLICA DE COSTA RICA
        </span>{" "}
        <br />
        <span>Departamento de Gestión y Producción de Recursos</span> <br />
        <span>gespro@mep.go.cr</span>
      </div>{" "}
      <br />
    </div>
  );
}

export default App;
