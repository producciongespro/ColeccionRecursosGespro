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
// $urlImg = utf8_decode($dataObject-> urlImg);
$url= utf8_decode($dataObject-> url);
$ciclo = utf8_decode($dataObject-> ciclo);
$materia = utf8_decode($dataObject-> materia);
// $comentarios = utf8_decode($dataObject-> comentarios);
$seccion = utf8_decode($dataObject-> seccion);
$nombre_seccion = utf8_decode($_POST['nombre_seccion']);
$imagen_nueva = utf8_decode($dataObject-> imagen_nueva);
if ($imagen_nueva == 1 ){
    $nombre_seccion = strtolower($nombre_seccion);
    $nombre_seccion = str_replace(' ', '', $nombre_seccion);
    $dir_bd = 'assets/img/'.$nombre_seccion."/";
    $dir_subida = '../2021/coleccion_gespro/assets/img/'.$nombre_seccion."/";
    $imagen = $dir_bd . $_FILES['imagen']['name'];
    $imagen_real = $dir_subida . $_FILES['imagen']['name'];
    move_uploaded_file($_FILES["imagen"]["tmp_name"], $imagen_real);
    $imagen = './'.$imagen;
     $actualizacion = "UPDATE `recursos` SET `nombre`='$nombre', `etiqueta`='$etiqueta', `urlImg`='$imagen', `url`='$url', `ciclo`='$ciclo', `materia`='$materia', `seccion`='$seccion' WHERE `id`='$idRecurso'";
}
else{
     $actualizacion = "UPDATE `recursos` SET `nombre`='$nombre', `etiqueta`='$etiqueta', `url`='$url', `ciclo`='$ciclo', `materia`='$materia',  `seccion`='$seccion' WHERE `id`='$idRecurso'";
}
if ($_SERVER['REQUEST_METHOD'] == 'POST')  {
    $consulta = mysqli_query($conexion, $actualizacion); 

   if($consulta)
   {
    echo json_encode(array('error'=>false,'msj'=>'Registro '.$idRecurso.' actualizado de forma exitosa.'));
   }
   else
   {
    echo json_encode(array('error'=>true,'msj'=>$conexion->error)); 
   }
}
?>