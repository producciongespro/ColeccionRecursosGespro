export async function getData (urlApi) {
    let res=null;
    try {
        res = await fetch (urlApi);
        res = res.json();
    } catch (error) {
        console.log(error);
    }
    return res;
}

export function jsonParser (array) {
    let tmpArray = [];
    if (array && array.length > 0) {
      array.forEach((item) => {
        //console.log(item);
        let tmpObj = {
          ciclo: JSON.parse(item.ciclo),
          //etiqueta: JSON.parse(item.etiqueta),
          etiqueta: item.etiqueta,
          id: item.id,
          id_materia: item.id_materia,
          id_seccion: item.id_seccion,
          materia: item.materia,
          nombre: item.nombre,
          seccion: item.seccion,
          url: item.url,
          urlImg: item.urlImg,
        };
        tmpArray.push(tmpObj);
      });
    }
    return tmpArray;
  };


  function eliminarTildes(cadena) {
    let tmpCadena = cadena.replace(/á/g, "a");
    tmpCadena = tmpCadena.replace(/é/g, "e");    
    tmpCadena = tmpCadena.replace(/í/g, "i");
    tmpCadena = tmpCadena.replace(/ó/g, "o");
    tmpCadena = tmpCadena.replace(/ú/g, "u");
    //console.log("tmpCadena",tmpCadena);   
    return tmpCadena;
}




export function busquedaAvanzada  (array, cadena ) {
let tmpArray=[];
cadena = eliminarTildes(cadena);


    for (let index = 0; index < array.length; index++) {      
        
        let strMateria = eliminarTildes( array[index].materia.toLowerCase() );
        let pattMateria = new RegExp( cadena.toLowerCase()  );
        let resMateria = pattMateria.test(strMateria);

        let strEtiqueta = eliminarTildes( array[index].etiqueta.toString().toLowerCase() );
        let pattEtiqueta = new RegExp( cadena.toLowerCase()  );
        let resEtiqueta = pattEtiqueta.test(strEtiqueta);

        let strNombre = eliminarTildes( array[index].nombre.toLowerCase() );
        let pattNombre = new RegExp( cadena.toLowerCase()  );
        let resNombre = pattNombre.test(strNombre);

        let strCiclo = eliminarTildes( array[index].ciclo.toString().toLowerCase() );
        let pattCiclo = new RegExp( cadena.toLowerCase()  );
        let resCiclo = pattCiclo.test(strCiclo);
  /*
    console.log(array[index].etiqueta , "---", array[index].seccion, "*****", array[index].nombre );
    console.log(array[index].etiqueta.toString() );
    */

        if (resMateria || resEtiqueta || resNombre || resCiclo ) {
            tmpArray.push(array[index]);
        }        
    }    

    return tmpArray;
}



export function plataforma() {
    let plataforma = navigator.platform;
    //let plataforma = "Linux armv8l";
    switch (plataforma) {
      case "Linux armv7l":
      case "Linux armv8l":
      case "iPhone":
      case "iPad":
        plataforma = "movil";
        break;
      case "win32":
        plataforma = "escritorio";
        //plataforma = "movil";
        break;
      default:
        plataforma = "escritorio";
        //plataforma = "movil";
        break;
    }
    sessionStorage.setItem("tipoPlataforma", plataforma);
    return plataforma;
  }
