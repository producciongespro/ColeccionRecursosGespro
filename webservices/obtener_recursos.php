<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
// header("Content-Type: text/html; charset=utf-8");
header("Content-type: application/json; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
$sql= "SELECT recursos.id, recursos.nombre, recursos.etiqueta, recursos.urlImg, recursos.url, recursos.ciclo, asignaturas.nombre AS materia, asignaturas.id AS id_materia, recursos.seccion, secciones.nombre AS seccion, secciones.id AS id_seccion FROM recursos LEFT JOIN secciones ON recursos.seccion = secciones.id LEFT JOIN asignaturas ON recursos.materia = asignaturas.id WHERE recursos.borrado = 0 ORDER BY recursos.id DESC";
include "conectar.php";
sleep(1);
function desconectar($conexion){

    $close = mysqli_close($conexion);

        if($close){
            echo '';
        }else{
            echo 'Ha sucedido un error inexperado en la conexi¨®n de la base de datos
';
        }

    return $close;
}

function obtenerArreglo($sql){
    //Creamos la conexion con la funcion anterior
  $conexion = conectarDB();

    //generamos la consulta

        mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$resultado = mysqli_query($conexion, $sql)) die(); //si la conexiÃ³n cancelar programa

    $arreglo = array(); //creamos un array

    //guardamos en un array todos los datos de la consulta
    $i=0;

    while($row = mysqli_fetch_assoc($resultado))
    {
        $arreglo[$i] = $row;
        $i++;
    }

    desconectar($conexion); //desconectamos la base de datos

    return $arreglo; //devolvemos el array
}

        $r = obtenerArreglo($sql);
        echo json_encode($r, JSON_UNESCAPED_SLASHES);

?>