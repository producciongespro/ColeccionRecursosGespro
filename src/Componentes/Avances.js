import React, { useState, useEffect } from "react";

import PreviasAvances from "./PreviasAvances";
import Carousel from "react-multi-carousel";
import Modal from "react-bootstrap/Modal";
import "react-multi-carousel/lib/styles.css";

function Avances(props) {
  const avances = props.avances;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  const [show, setShow] = useState(false);
  //Alamacena el avance seleccionado por el usuario para desplegar la
  //información en el modal
  const [avance, setAvance] = useState(null);

  useEffect(() => {
    console.log("Avance seleccionado por el usuario", avance);
  }, [avance]);

  const handleClose = () => setShow(false);
  const mostrarModal = (e) => {
    const indice = parseInt(e.target.dataset.indice);
    setAvance(avances[indice]);
    setShow(true);
  };

  const ModalBs = () => {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header 
            closeButton={true} 
            closeVariant="white"> 
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-8 font-white">
              {avance && avance.descripcion}
            </div>
            <div className="col-4">
              <img
                className="img-fluid"
                src="./assets/img/compu.png"
                alt="iamgen de coputadora"
              />
            </div>
          </div>
        </Modal.Body>
        {
          //<Modal.Footer>
          //</Modal.Footer>
        }
      </Modal>
    );
  };

  return (
    <React.Fragment>
      {ModalBs()}
      <div className="row">
        <div className="col-12 text-center">
          <h1 tabIndex={props.tabIndex} aria-level="2" className="titulo-1">
            Avances
          </h1>
        </div>
      </div>
      <Carousel responsive={responsive}>
        {avances.map((item, i) => (
          <PreviasAvances
            tabIndex={props.tabIndex}
            mostrarModal={mostrarModal}
            modo="avances"
            item={item}
            key={item.id}
            indice={i}
          />
        ))}
      </Carousel>
    </React.Fragment>
  );
}

export default Avances;
