import React from 'react';
import Previas from './Previas';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Coleccion (props) {
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
          items: 4
        }
      };    
    
   
    
    return (
      <React.Fragment>
      <h1 
        aria-level="2"
        tabIndex={props.tabIndex}  
        className="titulo-1"> {props.titulo}       
        </h1>       
        <span className="text-light">  {props.array.length } títulos encontrados </span>
        <br/>
      
    <Carousel responsive={responsive}>
                   {
                props.array.map((item,i)=>(
                    <Previas tabIndex={props.tabIndex} modo="coleccion" item={item} key={"previas"+i} />
                ))
            }
    </Carousel>
    </React.Fragment>
    );

}


export default Coleccion;