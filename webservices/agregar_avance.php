<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: text/html; charset=utf-8");

$method = $_SERVER['REQUEST_METHOD'];
require 'conectar.php';
$conn = conectarDB();
$usuario = utf8_decode($_POST['usuario']);
$nombre = utf8_decode($_POST['nombre']);
$urlImg= utf8_decode($_POST['urlImg']);
$descripcion = utf8_decode($_POST['descripcion']);
$nombre_seccion = "avances";
  $dir_subida = '../2021/coleccion_gespro/assets/img/'.$nombre_seccion."/";
  $imagen = $dir_bd . $_FILES['imagen']['name'];
  $imagen_real = $dir_subida . $_FILES['imagen']['name'];
  move_uploaded_file($_FILES["imagen"]["tmp_name"], $imagen_real);

 //Valida si la solicitud es post. Esto para evitar que se active e inserte registros en blanco
if ($_SERVER['REQUEST_METHOD'] == 'POST')  {

  //  if (isset($token)) {

    // if (!($token == API_KEY)) { //API_KEY declarada en conectar.php
    
    //       echo json_encode(array('error'=>true,'msj'=>'Acceso denegado.Token no autorizado o inexistente'));
    
    
    // } 
    // else {
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $imagen = './'.$imagen;
    $sql = "INSERT INTO `recursos`(`nombre`, `descripcion`, `urlImg`, `usuario`) VALUES ( '$nombre', '$descripcion', '$urlImg','$usuario')";

    if ($conn->query($sql) === TRUE) {
            echo json_encode(array('error'=>false,'msj'=>'Avance agregado satisfactoriamente. '.$imagen_real));
    } else {
      echo json_encode(array('error'=>true,'msj'=>$conn->error)); 
      }

    $conn->close();

    // }
  // } 
  // else {
  //    echo json_encode(array('error'=>true,'msj'=>'Falta token de autorizaci贸n'));
  // }

}
?>