<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: text/html; charset=utf-8");

$method = $_SERVER['REQUEST_METHOD'];

require 'conectar.php';
$conn = conectarDB();

$nombre = utf8_decode($_POST['nombre']);
$etiqueta = utf8_decode($_POST['etiqueta']);
$url= utf8_decode($_POST['url']);
$ciclo = utf8_decode($_POST['ciclo']);
$materia = utf8_decode($_POST['materia']);
$seccion = $_POST['seccion'];
$nombre_seccion = strtolower(utf8_decode($_POST['nombre_seccion']));
$nombre_seccion = str_replace(' ', '', $nombre_seccion);
  $dir_bd = 'assets/img/'.$nombre_seccion."/";
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
    $sql = "INSERT INTO `recursos`(`usuario`,`nombre`, `etiqueta`, `urlImg`, `url`, `ciclo`,`materia`, `seccion`) VALUES ('$usuario', '$nombre', '$etiqueta', '$imagen', '$url','$ciclo', '$materia', '$seccion')";

    if ($conn->query($sql) === TRUE) {
            echo json_encode(array('error'=>false,'msj'=>'Recurso agregado satisfactoriamente. '.$imagen_real));
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