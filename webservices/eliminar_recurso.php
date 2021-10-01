<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
$JSONData = file_get_contents("php://input");
$dataObject = json_decode($JSONData);  
require 'conectar.php';
$conexion = conectarDB();
$idRecurso = $dataObject-> id;

if ($_SERVER['REQUEST_METHOD'] == 'POST')  {
  $actualizacion = "UPDATE `recursos` SET `borrado`=1 WHERE `id`='$idRecurso'";
   
   $resultadoActualizacion = mysqli_query($conexion, $actualizacion); 

   if($resultadoActualizacion)
   {
    echo json_encode(array('error'=>false,'msj'=>'Recurso '.$idEvento.' eliminado de forma exitosa.'));
   }
   else
   {
    echo json_encode(array('error'=>true,'msj'=>$conexion->error)); 
   }
}
?>