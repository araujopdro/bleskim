
<?php
	session_start();
	include_once("config.php");
	date_default_timezone_set('America/Sao_Paulo');
	$data = date('d/m/Y H:i:s', time());

	$email = $_POST["email"];
	$mensagem = $_POST["mensagem"];
	
	$query_mensagem = "INSERT INTO ".$table_messages." (`data`, `email`, `mensagem`) VALUES ('$data', '$email', '$mensagem')";

	mysqli_query($bd, $query_mensagem)or die(mysqli_error($bd));	
	$this_id = $bd->insert_id;

	$value = array('response' => $this_id);
	header('Content-Type: application/json;');
	echo json_encode($value);
?>