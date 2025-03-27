<?php
	session_start();
	include_once("config.php");

    date_default_timezone_set('America/Sao_Paulo');
    $data = date('d/m/Y H:i:s', time());
		
	$pergunta = $_POST['pergunta'];
	$identificacao = $_POST['identificacao'];

	$query_cadastro = "INSERT INTO $table_messages (`pergunta`, `identificacao`, `data`) VALUES ('$pergunta', '$identificacao', '$data')";
	
	mysqli_query($bd, $query_cadastro)or die(mysqli_error($bd));
		$this_id = $bd->insert_id;

	$value = array('response' => $this_id);
	header('Content-Type: application/json;');
	echo json_encode($value);
?>