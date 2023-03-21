<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$server = "localhost";
$user = "root";
$pass = "";
$bd = "amongus";

$conexion = new mysqli($server, $user, $pass, $bd);

if ($conexion->connect_errno) {
    die("La conexion ha fallado" . $conexion->connect_errno);
}
else{
    echo "Conectado";
}








/*
$Resultado = mysqli_query($conexion, "Select * from planta");
$Obtenido = mysqli_fetch_array($Resultado);



echo "Nombre: ".$Obtenido['Plan_Nombre'];

mysqli_free_result($Resultado);
*/
/* Ejemplo de consulta
if (isset($_GET["consultar"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM empleados WHERE id=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

// Consulta todos los registros de la tabla empleados
$sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM empleados ");
if(mysqli_num_rows($sqlEmpleaados) > 0){
    $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
    echo json_encode($empleaados);
}
else{ echo json_encode([["success"=>0]]); }
*/

mysqli_close($conexion);
?>