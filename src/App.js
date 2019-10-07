import React from 'react';
import './App.scss';

import Seccion from './Componentes/Seccion';
import lista2018 from './Data/lista2018.json';
import lista2019 from './Data/lista2019.json';


function App() {
  return (
    <div className="App container">
      <div className="jumbotron">
          
          <div className="row ">
            <div className="col-8">
                <h1>Colección Recursos MEP</h1>
            </div>
            <div className="col-2 fondo-claro">              
              <input className="form-control" type="text"  id="txtBuscar"/>              
            </div>
            <div className="col-2 fondo-claro">
              <img className="img-1"  src="http://recursos.mep.go.cr/2019/ws/colecion_recursos_mep/img/lupa2.png" alt="buscar" />            
            </div>
          </div>
          
      </div>

<div className="row">
  <div className="col-12">
    <span className="subTitulo" >Colección 2018</span>
          <div className="wrapper">
            <Seccion array={lista2018} numSeccion="1-2018" anterior="3-2018" siguiente="2-2018" />
            <Seccion array={lista2018} numSeccion="2-2018" anterior="1-2018" siguiente="3-2018" />
            <Seccion array={lista2018} numSeccion="3-2018" anterior="2-2018" siguiente="1-2018" />
          </div>
  </div>
</div>
<br/>
<div className="row">
  <div className="col-12">
    <span className="subTitulo" >Colección 2019</span>
        <div className="wrapper">
          <Seccion array={lista2019} numSeccion="1-2019" anterior="2-2019" siguiente="2-2019" />
          <Seccion array={lista2019} numSeccion="2-2019" anterior="1-2019" siguiente="1-2019" />
        </div>
  </div>
</div>



    

    </div>
  );
}

export default App;
