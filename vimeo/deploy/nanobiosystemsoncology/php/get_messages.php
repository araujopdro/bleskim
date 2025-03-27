<?php
	session_start();
	include_once("config.php");
	 
	$query_get_messages = "SELECT * FROM  ".$table_messages." ORDER BY id ASC";
	$resultado = mysqli_query($bd,$query_get_messages) or die("Erro ao retornar dados");
	$num_rows = mysqli_num_rows($resultado);
	
	$value = array();

	while($r = mysqli_fetch_assoc($resultado)) {
	    $value[] = $r;
	}

	header("Content-type: application/json");
	echo json_encode($value);
?>