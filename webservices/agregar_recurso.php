<?php
/*header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: text/html; charset=utf-8');
header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');*/

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
$JSONData = file_get_contents("php://input");
$dataObject = json_decode($JSONData);  
require 'conectar.php';
//$headers = apache_request_headers();
$token = $dataObject-> API_KEY;
$nombre = utf8_decode($dataObject-> nombre);
$etiqueta = utf8_decode($dataObject-> etiqueta);
$urlImg = utf8_decode($dataObject-> urlImg);
$url= utf8_decode($dataObject-> url);
$ciclo = utf8_decode($dataObject-> ciclo);
$materia = utf8_decode($dataObject-> materia);
$comentarios = utf8_decode($dataObject-> comentarios);
$seccion = utf8_decode($dataObject-> seccion);

$conn = conectarDB();
 //echo json_encode(array('isOk'=>'false','msj'=>$token));   

 //Valida si la solicitud es post. Esto para evitar que se active e inserte registros en blanco
 if ($_SERVER['REQUEST_METHOD'] == 'POST')  {

    if (isset($token)) {

if (!($token == API_KEY)) { //API_KEY declarada en conectar.php
 
    echo json_encode(array('error'=>true,'msj'=>'Acceso denegado.Token no autorizado o inexistente'));
 
 
} else {
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  $sql = "INSERT INTO `recursos`(`nombre`, `etiqueta`, `urlImg`, `url`, `ciclo`, `materia`, `comentarios`, `seccion`) VALUES ('$nombre', '$etiqueta', '$urlImg', '$url', '$ciclo', '$materia', '$comentarios', '$seccion')";

  if ($conn->query($sql) === TRUE) {
        echo json_encode(array('error'=>false,'msj'=>'Recurso agregado satisfactoriamente'));
  } else {
    echo json_encode(array('error'=>true,'msj'=>$conn->error)); 
  }

  $conn->close();

}
} else {
    echo json_encode(array('error'=>true,'msj'=>'Falta token de autorización'));
}

}
?>