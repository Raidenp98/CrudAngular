<?php require_once("conexion.php"); ?>
<?php// include("includes/header.php"); ?>

<?php

if(isset($_POST["register"])){

if(!empty($_POST[‘User_Correo’]) && !empty($_POST[‘User_Nombre’]) && !empty($_POST[‘User_Clave’])) {
//$full_name=$_POST[‘full_name’];
$email=$_POST[‘User_Correo’];
$username=$_POST[‘User_Nombre’];
$password=$_POST[‘User_Clave’];

$query=mysql_query("SELECT * FROM amongus WHERE User_Nombre=’".$username."’");
$numrows=mysql_num_rows($query);

if($numrows==0)
{
$sql="INSERT INTO amongus
(User_Correo, User_Nombre,User_Clave)
VALUES(’$email’, ‘$username’, ‘$password’)";

$result=mysql_query($sql);

if($result){
$message = "Cuenta Correctamente Creada";
} else {
$message = "Error al ingresar datos de la informacion!";
}

} else {
$message = "El nombre de usuario ya existe! Por favor, intenta con otro!";
}

} else {
$message = "Todos los campos no deben de estar vacios!";
}
}
?>

<?php if (!empty($message)) {echo "<p class=\"error\">" . "Mensaje: ". $message . "</p>";} ?>

