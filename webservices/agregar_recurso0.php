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
// $headers = apache_request_headers();
// $token = $dataObject-> API_KEY;

print_r("objeto recibido".$dataObject);
$usuario = utf8_decode($dataObject-> usuario);
$nombre = utf8_decode($dataObject-> nombre);
$etiqueta = utf8_decode($dataObject-> etiqueta);
$etiqueta = json_encode(explode(",", $etiqueta));
$url= utf8_decode($dataObject-> url);
$ciclo = utf8_decode($dataObject-> ciclo);
print_r ("ciclo antes: ".$ciclo);
$ciclo = json_encode(explode(",", $ciclo));
$materia = utf8_decode($dataObject-> materia);
$seccion = $dataObject-> seccion;
  $dir_subida = 'assets/img/';
  $imagen = $dir_subida . $_FILES['imagen']['name']; 
  move_uploaded_file($_FILES["imagen"]["tmp_name"], $imagen);
 print_r ("NOMBRE:".$imagen);  
  print_r ("ciclo".$ciclo);
$conn = conectarDB();
//echo json_encode(array('isOk'=>'false','msj'=>$token));   

 //Valida si la solicitud es post. Esto para evitar que se active e inserte registros en blanco
if ($_SERVER['REQUEST_METHOD'] == 'POST')  {

if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
 }

$sql = "INSERT INTO `recursos`(`usuario`,`nombre`, `etiqueta`, `urlImg`, `url`, `ciclo`,`materia`, `seccion`) VALUES ('$usuario', '$nombre', '$etiqueta', '$imagen', '$url','$ciclo', '$materia', '$seccion')";

if ($conn->query($sql) === TRUE) {
        echo json_encode(array('error'=>false,'msj'=>'Recurso agregado satisfactoriamente'));
 } else {
   echo json_encode(array('error'=>true,'msj'=>$conn->error)); 
  }

 $conn->close();

}
?>