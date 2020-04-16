import React from 'react';
import Coleccion from './Coleccion';


function GrupoColeccion(props) {


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