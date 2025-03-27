<?php
	session_start();
	include_once("config.php");

    date_default_timezone_set('America/Sao_Paulo');
    $data = date('d/m/Y H:i:s', time());

	if ($stmt = $bd->prepare("SELECT id, nome, email FROM ".$table." WHERE email = ?")) {
		$stmt->bind_param('s', $_POST['email']);
		$stmt->execute();
		$stmt->store_result();

		if ($stmt->num_rows > 0) {
			$stmt->bind_result($id, $nome, $email);
			$stmt->fetch();


			mysqli_query($bd, "INSERT INTO ".$table_logs." (`email`, `data`) VALUES ('$email', '$data')")or die(mysqli_error($bd));
			
			$value = array('response' => $id);
			$value['name'] = $nome;
			
          	header('Content-Type: application/json;');
          	echo json_encode($value);
		} else {
			$value = array('response' => -1);
          	header('Content-Type: application/json;');
          	echo json_encode($value);
		}
		$stmt->close();
	}
?>