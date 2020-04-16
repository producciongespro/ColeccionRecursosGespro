import React from 'react';

import Coleccion from './Componentes/Coleccion';


import Seccion from './Componentes/Seccion';
import lista2018 from './Data/lista2018.json';
import lista2019 from './Data/lista2019.json';
import lista2017 from './Data/lista2017.json';
import listaanteriores from './Data/listaanteriores.json';
import listaotros from './Data/listaotros.json';
import listaavances from './Data/listaavances.json';

console.log(lista2018);


function App() {
  return (
    <div className="App container">
      
      <div className="jumbotron">  
         
      </div>

      <div className="row center">
            <div className="col-6">              
                          
            </div>

            <div className="col-4 fondo-claro">              
              <input className="form-control" type="text"  id="txtBuscar"/>              
            </div>
            <div className="col-2 fondo-claro">
              <img className="img-1"  src="http://recursos.mep.go.cr/2019/ws/colecion_recursos_mep/img/lupa2.png" alt="buscar" />            
            </div>
        </div>

        {lista2017 &&  <Coleccion array={lista2017} />  }
        <br/>
        {lista2018 &&  <Coleccion array={lista2018} />  }
        <br/>
        {lista2019 &&  <Coleccion array={lista2019} />  }
        


    </div>
  );
}

export default App;
