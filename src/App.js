import React from 'react';
import './App.scss';

import Seccion from './Componentes/Seccion';
import lista2018 from './Data/lista2018.json';
import lista2019 from './Data/lista2019.json';
import lista2017 from './Data/lista2017.json';
import listaanteriores from './Data/listaanteriores.json';
import listaotros from './Data/listaotros.json';
import listaavances from './Data/listaavances.json';

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



 
<div className="row">
  <div className="col-sm-12">
    <span className="subTitulo" >Avances</span>
          <div className="wrapper">
            <Seccion array={listaavances} numSeccion="1-avances" anterior="2-avances" siguiente="2-avances" />
            <Seccion array={listaavances} numSeccion="2-avances" anterior="1-avances" siguiente="1-avances" />
            </div>
  </div>
</div>
<br/> <br/>




<div className="row">
  <div className="col-sm-12">
    <span className="subTitulo" >2019</span>
          <div className="wrapper">
            <Seccion array={lista2019} numSeccion="1-2019" anterior="3-2019" siguiente="2-2019" />
            <Seccion array={lista2019} numSeccion="2-2019" anterior="1-2019" siguiente="3-2019" />
            <Seccion array={lista2019} numSeccion="3-2019" anterior="2-2019" siguiente="1-2019" />
          </div>
  </div>
</div>
<br/> <br/>


<div className="row">
  <div className="col-sm-12">
    <span className="subTitulo" >2018</span>
        <div className="wrapper">
          <Seccion array={lista2018} numSeccion="1-2018" anterior="5-2018" siguiente="2-2018" />
          <Seccion array={lista2018} numSeccion="2-2018" anterior="1-2018" siguiente="3-2018" />
          <Seccion array={lista2018} numSeccion="3-2018" anterior="2-2018" siguiente="4-2018" />
          <Seccion array={lista2018} numSeccion="4-2018" anterior="3-2018" siguiente="5-2018" />
          <Seccion array={lista2018} numSeccion="5-2018" anterior="4-2018" siguiente="1-2018" />
        </div>
  </div>
</div>
<br/><br/>


<div className="row">
  <div className="col-sm-12">
    <span className="subTitulo" >2017</span>
        <div className="wrapper">
          <Seccion array={lista2017} numSeccion="1-2017" anterior="2-2017" siguiente="2-2017" />
          <Seccion array={lista2017} numSeccion="2-2017" anterior="1-2017" siguiente="1-2017" />
        </div>
  </div>
</div>
<br/><br/>
    

<div className="row">
  <div className="col-sm-12">
    <span className="subTitulo" >Anteriores</span>
        <div className="wrapper">
          <Seccion array={listaanteriores} numSeccion="1-anteriores" anterior="7-anteriores" siguiente="2-anteriores" />
          <Seccion array={listaanteriores} numSeccion="2-anteriores" anterior="1-anteriores" siguiente="3-anteriores" />
          <Seccion array={listaanteriores} numSeccion="3-anteriores" anterior="2-anteriores" siguiente="4-anteriores" />
          <Seccion array={listaanteriores} numSeccion="4-anteriores" anterior="3-anteriores" siguiente="5-anteriores" />
          <Seccion array={listaanteriores} numSeccion="5-anteriores" anterior="4-anteriores" siguiente="6-anteriores" />
          <Seccion array={listaanteriores} numSeccion="6-anteriores" anterior="5-anteriores" siguiente="7-anteriores" />
          <Seccion array={listaanteriores} numSeccion="7-anteriores" anterior="6-anteriores" siguiente="1-anteriores" />

        </div>
  </div>
</div>
<br/><br/>



<div className="row">
  <div className="col-sm-12">
    <span className="subTitulo" >Otros</span>
        <div className="wrapper">
          <Seccion array={listaotros} numSeccion="1-otros" anterior="6-otros" siguiente="2-otros" />
          <Seccion array={listaotros} numSeccion="2-otros" anterior="1-otros" siguiente="3-otros" />
          <Seccion array={listaotros} numSeccion="3-otros" anterior="2-otros" siguiente="4-otros" />
          <Seccion array={listaotros} numSeccion="4-otros" anterior="3-otros" siguiente="5-otros" />
          <Seccion array={listaotros} numSeccion="5-otros" anterior="4-otros" siguiente="6-otros" />
          <Seccion array={listaotros} numSeccion="6-otros" anterior="5-otros" siguiente="1-otros" />
        </div>
  </div>
</div>
<br/><br/>



    </div>
  );
}

export default App;
