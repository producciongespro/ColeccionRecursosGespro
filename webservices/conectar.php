<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
function conectarDB(){

  $servidor = "localhost";
  $usuario = "root";
  $password = "";
  $bd = "recursos_coleccion";
  define('API_KEY','$2y$10$Koo//ZYTk58mSVgGylDf1eszoz4smvE.dqLHf9B1UDrkq6t.d7O5C');

    $conexion = mysqli_connect($servidor, $usuario, $password,$bd);

        if($conexion){
            echo "";
        }else{
            echo 'Ha sucedido un error inesperado en la conexion de la base de datos
';
        }

    return $conexion;
}
?>
