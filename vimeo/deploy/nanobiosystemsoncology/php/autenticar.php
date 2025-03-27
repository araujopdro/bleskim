<?php
	session_start();
	include_once("config.php");

    date_default_timezone_set('America/Sao_Paulo');
    $data = date('d/m/Y H:i:s', time());
	
	if ($stmt = $bd->prepare("SELECT id, nome, email, senha, ssid FROM ".$table." WHERE email = ?")) {
		$stmt->bind_param('s', $_POST['email']);
		$stmt->execute();
		$stmt->store_result();

		if ($stmt->num_rows > 0) {
			$stmt->bind_result($id, $nome, $email, $senha, $ssid);
			$stmt->fetch();
			
			//if (strcmp($_POST['senha'], $senha) === 0) {

				$ssid = session_create_id();
				$_SESSION['status'] = $ssid;
				$_SESSION['id'] = $id;
				$_SESSION['email'] = $email;

				mysqli_query($bd, "INSERT INTO ".$table_logs." (`email`, `data`) VALUES ('$email', '$data')")or die(mysqli_error($bd));
				mysqli_query($bd, "UPDATE ".$table." SET ssid='$ssid' WHERE id='$id'")or die(mysqli_error($bd));
				
				$value = array('ssid' => $ssid, 'nome' => $_POST['nome'], 'email' => $email);
				header('Content-Type: application/json;');
				echo json_encode($value);

			// } else {
			// 	$value = array('response' => -2);
			// 	header('Content-Type: application/json;');
			// 	echo json_encode($value);
			//}
		} else {
			$value = array('response' => -1);
          	header('Content-Type: application/json;');
          	echo json_encode($value);
		}
		$stmt->close();
	}
?>