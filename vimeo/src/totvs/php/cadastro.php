<?php
	session_start();
	include_once("config.php");

    date_default_timezone_set('America/Sao_Paulo');
    $data = date('d/m/Y H:i:s', time());
		
	$email = $_POST['email'];
	$nome = $_POST['nome'];
	$org = $_POST['org'];
	$cnpj = $_POST['cnpj'];
	$cel = $_POST['cel'];

	$query_cadastro = "INSERT INTO $table (`nome`, `email`, `org`, `cnpj`, `cel`, `data`) VALUES ('$nome', '$email', '$org', '$cnpj', '$cel', '$data')";
	
	mysqli_query($bd, $query_cadastro)or die(mysqli_error($bd));
		$this_id = $bd->insert_id;

	$value = array('nome' => $nome, 'email' => $email, );
	header('Content-Type: application/json;');
	echo json_encode($value);
?>