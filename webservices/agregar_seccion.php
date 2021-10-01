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
$seccion = utf8_decode($dataObject-> seccion);

$conn = conectarDB();
//echo json_encode(array('isOk'=>'false','msj'=>$token));   

 //Valida si la solicitud es post. Esto para evitar que se active e inserte registros en blanco
if ($_SERVER['REQUEST_METHOD'] == 'POST')  {

if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
 }

$sql = "INSERT INTO `secciones`(`nombre`) VALUES ('$seccion')";

if ($conn->query($sql) === TRUE) {
        echo json_encode(array('error'=>false,'msj'=>'Sección agregada satisfactoriamente'));
 } else {
   echo json_encode(array('error'=>true,'msj'=>$conn->error)); 
  }

 $conn->close();

}
?>