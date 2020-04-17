function eliminarTildes(cadena) {
    let tmpCadena = cadena.replace(/á/g, "a");
    tmpCadena = tmpCadena.replace(/é/g, "e");    
    tmpCadena = tmpCadena.replace(/í/g, "i");
    tmpCadena = tmpCadena.replace(/ó/g, "o");
    tmpCadena = tmpCadena.replace(/ú/g, "u");
    //console.log("tmpCadena",tmpCadena);   
    return tmpCadena;
}




function busquedaAvanzada  (array, cadena ) {
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


export default busquedaAvanzada