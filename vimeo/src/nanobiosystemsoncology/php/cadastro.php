<?php
	session_start();
	include_once("config.php");

    date_default_timezone_set('America/Sao_Paulo');
    $data = date('d/m/Y H:i:s', time());
		
	$nome = $_POST['nome'];
	$email = $_POST['email'];

	$query_cadastro = "INSERT INTO $table (`email`, `nome`, `data`) VALUES ('$email', '$nome', '$data')";
	
	mysqli_query($bd, $query_cadastro)or die(mysqli_error($bd));
		$this_id = $bd->insert_id;
		
	$_SESSION['email'] = $email;
	$_SESSION['user_id'] = $this_id;

	$value = array('response' => $this_id);
	header('Content-Type: application/json;');
	echo json_encode($value);
?>