<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
$sql= "SELECT * FROM recursos ORDER BY id ASC";
include "conectar.php";
sleep(1);
function desconectar($conexion){

    $close = mysqli_close($conexion);

        if($close){
            echo '';
        }else{
            echo 'Ha sucedido un error inexperado en la conexión de la base de datos
';
        }

    return $close;
}

function obtenerArreglo($sql){
    //Creamos la conexion con la funcion anterior
  $conexion = conectarDB();

    //generamos la consulta

        mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$resultado = mysqli_query($conexion, $sql)) die(); //si la conexión cancelar programa

    $arreglo2021 = array(); //creamos un array
    $arreglo2020 = array(); 
    $arreglo2019 = array(); 
    $arreglo2018 = array(); 
    $arreglo2017 = array(); 
    $arreglootros = array(); 
    $arregloavances = array(); 
    $arregloprofe= array(); 
    $arregloanteriores= array(); 
    //guardamos en un array todos los datos de la consulta
    $i=0;

    while($row = mysqli_fetch_assoc($resultado))
    {
   
       switch (substr($row['seccion'],-4)) {
            case '2021':
                array_push($arreglo2021,$row);
            break;
            case '2020':
                array_push($arreglo2020,$row);
            break;
            case '2019':
                array_push($arreglo2019,$row);
            break; 
            case '2018':
                array_push($arreglo2018,$row);
            break; 
            case '2017':
                array_push($arreglo2017,$row);
            break;
            case 'tros':
                array_push($arreglootros,$row);
            break;
            case 'ores':
                array_push($arregloanteriores,$row);
            break; 
            case 'rofe':
                array_push($arregloprofe,$row);
            break; 
            case 'nces':
                array_push($arregloavances,$row);
            break;  
           default:
               # code...
               break;
       }
        
        $i++;
    }

    desconectar($conexion); //desconectamos la base de datos
    $todos= array(
      "avances" => $arregloavances,
      "otros" => $arreglootros,
      "profe" => $arregloprofe,
      "anteriores" => $arregloanteriores,
      2017 => $arreglo2017,
      2018 => $arreglo2018,
      2019 => $arreglo2019,
      2020 => $arreglo2020
      2021 => $arreglo2021
    );
   
    return $todos; //devolvemos el array
}

        $r = obtenerArreglo($sql);
        echo json_encode($r);

?>