import React from 'react';
import Coleccion from './Coleccion';
import detectarPlataforma from '../modulos/plataforma';
const plataforma = detectarPlataforma();
function GrupoColeccion(props) {
    if (plataforma==="movil") {
        console.log("plataforma2:",plataforma)
    }
    else{console.log("plataforma:",plataforma)}  

    return (
        <React.Fragment>
                     
            {props.lista2020 &&  <Coleccion tabIndex={3} titulo="Colección 2020" array={props.lista2020} />  }
            <br/>
            {props.lista2019 &&  <Coleccion tabIndex={4} titulo="Colección 2019" array={props.lista2019} />  }
            <br/>
            {props.lista2018 &&  <Coleccion tabIndex={5} titulo="Colección 2018" array={props.lista2018} />  }
            <br/>
            {props.lista2017 &&  <Coleccion tabIndex={6} titulo="Colección 2017" array={props.lista2017} />  }
            <br/>      
            {props.listaAnteriores &&  <Coleccion tabIndex={7} titulo="Anteriores" array={props.listaAnteriores} />  }
            <br/>
            {props.listaOtros &&  <Coleccion tabIndex={8} titulo="Otros" array={props.listaOtros} />  }
            <br/> 
            {props.listaprofe &&  <Coleccion tabIndex={9} titulo="Profe en casa" array={props.listaprofe} />  }
    
        </React.Fragment>
    );
    
}

export default GrupoColeccion