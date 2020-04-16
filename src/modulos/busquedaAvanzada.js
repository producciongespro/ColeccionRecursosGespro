

function busquedaAvanzada  (array, cadena ) {
let tmpArray=[];
    for (let index = 0; index < array.length; index++) {
        let strMateria = array[index].materia.toLowerCase()
        let pattMateria = new RegExp( cadena.toLowerCase()  );
        let resMateria = pattMateria.test(strMateria);

        let strEtiqueta = array[index].etiqueta.toString().toLowerCase()
        let pattEtiqueta = new RegExp( cadena.toLowerCase()  );
        let resEtiqueta = pattEtiqueta.test(strEtiqueta);


    /*
    console.log(array[index].etiqueta , "---", array[index].seccion, "*****", array[index].nombre );
    console.log(array[index].etiqueta.toString() );
    */


        if (resMateria || resEtiqueta ) {
            tmpArray.push(array[index]);
        }        
    }    

    return tmpArray;
}


export default busquedaAvanzada