import React, {useState, useEffect} from 'react';

import GrupoColeccion from './Componentes/GrupoColeccion';
import Coleccion from './Componentes/Coleccion';
import busqueda from './modulos/busquedaAvanzada';


import listaAvances from './data/listaavances.json';
import lista2017 from './data/lista2017.json';
import lista2018 from './data/lista2018.json';
import lista2019 from './data/lista2019.json';
import listaAnteriores from './data/listaanteriores.json';
import listaOtros from './data/listaotros.json';



const arrayGeneral= listaOtros.concat(lista2017, lista2018, lista2019, listaAnteriores );
//console.log(arrayGeneral);







function App() {
  const [arrayResultaado, setArrayResultado]=useState(null);

  useEffect(()=>{
    console.log(arrayResultaado);    
  })
  
  const handleBuscar=(e)=>{
      setArrayResultado(busqueda(arrayGeneral, e.target.value));
  }


  return (
    <div className="App container">
      
      <div className="jumbotron"></div>

      <div className="row center">
            <div className="col-6">              
                          
            </div>

            <div className="col-4 fondo-claro">              
                <input onChange={handleBuscar} className="form-control" type="text"  id="txtBuscar"/>              
            </div>
            <div className="col-2 fondo-claro">
              <img className="img-1"  src="http://recursos.mep.go.cr/2019/ws/colecion_recursos_mep/img/lupa2.png" alt="buscar" />            
            </div>
        </div>

        {
          arrayResultaado ?          
            <Coleccion titulo="Búsqueda" array={arrayResultaado} />
          :
            <GrupoColeccion lista2017={lista2017} lista2018={lista2018} lista2019={lista2019} listaAnteriores={listaAnteriores}  listaOtros={listaOtros} />
          
        }

    </div>
  );
}

export default App;
