import React, { useState } from 'react';
import Previas from './Previas';
import Carousel from 'react-multi-carousel';
import Modal from 'react-bootstrap/Modal';
import 'react-multi-carousel/lib/styles.css';


function Avances(props) {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const [show, setShow] = useState(false);
    const [urlImg, setUrlImg] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setUrlImg(e.target.dataset.url);
        setShow(true);
    }

    const ModalBs = () => {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    {
                        //<Modal.Title>
                        //</Modal.Title>
                    }
                </Modal.Header>
                <Modal.Body>
                    <div className="col-sm-12 text-center">
                        <img
                            src={urlImg}
                            alt="avances"
                            className="img-fluid"
                        />
                    </div>
                </Modal.Body>
                {
                    //<Modal.Footer>
                    //</Modal.Footer>
                }
            </Modal>
        );
    }

    return (
        <React.Fragment>
            {
                ModalBs()
            }
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h1 className="titulo-1">Avances</h1>
                </div>
            </div>
            <Carousel responsive={responsive}>
                {
                    props.array.map((item, i) => (
                        <Previas handleShow={handleShow} modo="avances" item={item} key={"previas" + i} />
                    ))
                }
            </Carousel>
        </React.Fragment>
    );

}

export default Avances;
