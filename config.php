<?php
$servidor = 'localhost';
$usuario = 'tu_usuario';
$contraseña = 'tu_contraseña';
$basedatos = 'nombre_basedatos';

try {
  // Conexión a la base de datos
  $conexion = new PDO("mysql:host=$servidor;dbname=$basedatos", $usuario, $contraseña);
  $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo 'Error en la conexión a la base de datos: ' . $e->getMessage();
  exit();
}
?>
