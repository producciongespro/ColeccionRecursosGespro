import React, {useState, useEffect} from 'react';

import GrupoColeccion from './Componentes/GrupoColeccion';
import Coleccion from './Componentes/Coleccion';
import Avances from './Componentes/Avances';
import busqueda from './modulos/busquedaAvanzada';
import detectarPlataforma from './modulos/plataforma';


import listaAvances from './data/listaavances.json';
import lista2017 from './data/lista2017.json';
import lista2018 from './data/lista2018.json';
import lista2019 from './data/lista2019.json';
import listaAnteriores from './data/listaanteriores.json';
import listaOtros from './data/listaotros.json';


const plataforma = detectarPlataforma();
const arrayGeneral= listaOtros.concat(lista2017, lista2018, lista2019, listaAnteriores );
//console.log(arrayGeneral);







function App() {
  const [arrayResultaado, setArrayResultado]=useState(null);
  const [palabraBusqueda, setPalabraBusuqeda ]=useState("");
  const [isBusqueda, setIsBusqueda]=useState(false);

  useEffect(()=>{
    //console.log(arrayResultaado);
    //console.log("palabraBusqueda",palabraBusqueda);
    console.log("isBusqueda",isBusqueda);

        
  });

  const handleActivarBusqueda=()=>{
    setIsBusqueda(!isBusqueda);
  }
  
  const handleBuscar=(e)=>{    
      setArrayResultado(busqueda(arrayGeneral, e.target.value));
      //Se almacena la palabra en estado para oder contorlar el momento
      //en que se carga el grupo de colección (Que sería cuando la palabra está vacía)
      setPalabraBusuqeda(e.target.value);
  }


  return (
    <div className="App container">
    <div> 
        {
        plataforma==="movil" ?
            (
           <React.Fragment>
              <div className="">
              <img className="img-fluid pepito" src="http://recursos.mep.go.cr/2019/ws/colecion_recursos_mep/img/banner_coleccion.png" alt=""/>
              </div>
          </React.Fragment> 
          ) :
          (
          <React.Fragment>
            <div className="jumbotron">
            </div>
          </React.Fragment> 
          )
          }
      </div>
      <div className="row">
        <div className="col-12">
          {
            listaAvances &&  <Avances array={listaAvances} />
          }
        </div>
      </div>

      <div className="row">
            <div className="col-6 text-right"> 
              <button onClick={handleActivarBusqueda} className="btn btn-outline-dark">
                <img className="img-1"  src="https://recursos.mep.go.cr/2019/ws/colecion_recursos_mep/img/lupa2.png" alt="buscar" />                        
              </button>             
            </div>
        {
          isBusqueda && (
                <div className="col-6 fondo-claro">              
                  <input onChange={handleBuscar} className="form-control" type="text"  id="txtBuscar"/>              
                </div>          
          )
        }
        </div>

        {
          (arrayResultaado && palabraBusqueda !== "" && isBusqueda ) ?          
            <Coleccion titulo="Búsqueda" array={arrayResultaado} />
          :
            <GrupoColeccion lista2017={lista2017} lista2018={lista2018} lista2019={lista2019} listaAnteriores={listaAnteriores}  listaOtros={listaOtros} />
          
        }

    </div>
  );
}

export default App;
