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
$idRecurso = $dataObject-> idRecurso;
$nombre = utf8_decode($dataObject-> nombre);
$etiqueta = utf8_decode($dataObject-> etiqueta);
$urlImg = utf8_decode($dataObject-> urlImg);
$url= utf8_decode($dataObject-> url);
$ciclo = utf8_decode($dataObject-> ciclo);
$materia = utf8_decode($dataObject-> materia);
$comentarios = utf8_decode($dataObject-> comentarios);
$seccion = utf8_decode($dataObject-> seccion);
if ($_SERVER['REQUEST_METHOD'] == 'POST')  {
  $actualizacion = "UPDATE `recursos` SET `nombre`='$nombre', `etiqueta`='$etiqueta', `urlImg`='$urlImg', `url`='$url', `ciclo`='$ciclo', `materia`='$materia', `comentarios`='$comentarios', `seccion`='$seccion' WHERE `id`='$idRecurso'";
   
   $resultadoActualizacion = mysqli_query($conexion, $actualizacion); 

   if($resultadoActualizacion)
   {
    echo json_encode(array('error'=>false,'msj'=>'Registro '.$idRecurso.' editado de forma exitosa.'));
   }
   else
   {
    echo json_encode(array('error'=>true,'msj'=>$conexion->error)); 
   }
}
?>