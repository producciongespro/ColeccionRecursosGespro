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
                     
            {props.lista2019 &&  <Coleccion titulo="Colección 2019" array={props.lista2019} />  }
            <br/>
            {props.lista2018 &&  <Coleccion titulo="Colección 2018" array={props.lista2018} />  }
            <br/>
            {props.lista2017 &&  <Coleccion titulo="Colección 2017" array={props.lista2017} />  }
            <br/>      
            {props.listaAnteriores &&  <Coleccion titulo="Anteriores" array={props.listaAnteriores} />  }
            <br/>
            {props.listaOtros &&  <Coleccion titulo="Otros" array={props.listaOtros} />  } 
    
        </React.Fragment>
    );
    
}

export default GrupoColeccion