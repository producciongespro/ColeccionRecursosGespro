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
import lista2020 from './data/lista2020.json';
import lista2021 from './data/lista2021.json';
import listaAnteriores from './data/listaanteriores.json';
import listaOtros from './data/listaotros.json';
import listaprofe from './data/listaprofe.json';


const plataforma = detectarPlataforma();
const arrayGeneral= listaOtros.concat(lista2017, lista2018, lista2019, lista2020, lista2021, listaAnteriores, listaprofe, );
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
        {
        plataforma==="movil" ?
            (           
              // <div tabIndex="1"  role="heading" aria-level="1" title="Colección recursos"  className="jumbotron"> </div> 
              <div className="">
              <img className="img-fluid pepito" src="./assets/img/interfaz/banner.jpg" alt=""/>
              </div>         
          ) :
          (         
            <div tabIndex="1"  role="heading" aria-level="1" title="Colección recursos"  className="jumbotron"> </div>         
          )
          } 
    
   
    { /* Sección de acerca de*/ }
    {
        plataforma==="movil" ?
            (           
              <div className="row text-right">
              <div className="col-12">
                <a href="https://recursos.mep.go.cr/creditos_gespro/" target="_blank" rel="noopener noreferrer">
                  <img className="movil2" src="./assets/img/interfaz/acerca.png" alt="Acerca de"/>
                </a>
              </div>
            </div>        
          ) :
          (         
            <div tabIndex="2">
            <div className="row text-right">
            <div className="col-12">
              <a href="https://recursos.mep.go.cr/creditos_gespro/" target="_blank" rel="noopener noreferrer">
                <img className="acerca img.fluid zoom" role="button" src="./assets/img/interfaz/acerca.png"  alt="Acerca de"/>
              </a>
            </div>
            </div>
          </div>        
          )
          } 





{ /* Sección de búsqueda de recursos*/ }

    <div  className="row" >
          
            
            <div tabIndex="3" className="col-6 text-right"> 
            <button onClick={handleActivarBusqueda} className="btn btn-outline-dark">
            {
              !isBusqueda ?
              <img className="img-1"  
                src="./assets/img/lupa2.png" 
                alt="buscar" />                        
                :
                <img className="img-1"  
                src="./assets/img/cancel.png" 
                alt="buscar" />                        
            }
            </button>             
          </div>
          

        {
          isBusqueda && (
                <div tabIndex="3" className="col-6 fondo-claro">              
                  <input 
                  alt="Escriba la palabra para búsqueda" 
                  onChange={handleBuscar} 
                  className="form-control" 
                  type="text"  
                  id="txtBuscar"
                  placeholder="Digite la palabra(s) o frase a buscar"
                  />              
                </div>        
          )
        }
        </div><br/><br/>  




{ /* Sección de avacnces*/ }
      
      {
        !isBusqueda &&
        <div tabIndex="4" className="row">
        <div className="col-12">
          {
            listaAvances &&  <Avances tabIndex="2"  array={listaAvances} />
          }
        </div>
        </div> 
      }
    <br/><br/>  <br/>
     

 

{ /* Sección de búsqueda de cada categoría*/ }
        {
          (arrayResultaado && palabraBusqueda !== "" && isBusqueda ) ?          
            <Coleccion tabIndex={4} titulo="Búsqueda" array={arrayResultaado} />
          :
            <GrupoColeccion lista2017={lista2017} lista2018={lista2018} lista2019={lista2019} lista2020={lista2020}  lista2021={lista2021} listaAnteriores={listaAnteriores}  listaOtros={listaOtros} listaprofe={listaprofe}/>
          
        }

<div tabIndex="13" className="row mt-4">
    <div className="col-sm-12">
    <div className="alert nota">
          Nota: <strong>Algunos recursos </strong> están siendo actualizados debido a que fueron programados en Adobe Flash, una tecnología obsoleta en estos momentos. 
    </div>
    </div>
  </div>


{ /* Sección de encuesta*/ }
  {/*
  <div tabIndex="4" className="row text-center">
    <div className="col-12">
        <a href="http://www.encuesta.mep.go.cr/index.php/681422?lang=es" target="_blank" rel="noopener noreferrer"> 
        <img className="img-fluid img-responsive  encuesta zoom" role="button" src="https://recursos.mep.go.cr/2019/ws/colecion_recursos_mep/img-interfaz/encuesta.png" alt="Encuesta para nuevo recurso"></img>
        </a>
      </div>
        <br/><br/><br/>
  </div>
  */}

  <div  tabIndex="14" className="row mt-4">
    <div className="col-sm-12">
    <div className="alert alert-info infoen">
          Si <strong>no</strong> ha encontrado el recurso relacionado con la temática o contendio que buscaba, 
          puede dar clic  <a href="http://www.encuesta.mep.go.cr/index.php/681422?lang=es" target="_blank" rel="noopener noreferrer"><strong className="enlaceAqui">AQUÍ</strong></a> para que nos lo indique.          
        </div>
    </div>
  </div>
        
    

  { /* Sección pie de página*/ }
    <div tabIndex="15" className="col-12 text-center pie">
        <span>DIRECCIÓN DE RECURSOS TECNOLÓGICOS EN EDUCACIÓN DEL MINISTERIO DE EDUCACIÓN PÚBLICA DE COSTA RICA</span> <br/>
        
        <span>Departamento de Gestión y Producción de Recursos</span> <br/>
        <span>gespro@mep.go.cr</span>
    </div>  <br/> 
        

    </div>
  );

}

export default App;
