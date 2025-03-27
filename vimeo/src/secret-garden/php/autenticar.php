<?php
	session_start();
	include_once("config.php");

    date_default_timezone_set('America/Sao_Paulo');
    $data = date('d/m/Y H:i:s', time());

	if ($stmt = $bd->prepare("SELECT id, email FROM ".$table." WHERE senha = ?")) {
		$stmt->bind_param('s', $_POST['senha']);
		$stmt->execute();
		$stmt->store_result();

		if ($stmt->num_rows > 0) {
			$stmt->bind_result($id, $email);
			$stmt->fetch();
			
			$_SESSION['id'] = $id;
			$_SESSION['email'] = $email;
			
			$newid = session_create_id();
			$_SESSION['staus'] = $newid;

			mysqli_query($bd, "INSERT INTO ".$table_logs." (`email`, `status`) VALUES ('$email', '$newid')")or die(mysqli_error($bd));
			
			$value = array('response' => $id);
          	header('Content-Type: application/json;');
          	echo json_encode($value);
		} else {
			$value = array('response' => -1);
          	header('Content-Type: application/json;');
          	echo json_encode($value);
		}
		$stmt->close();
	} else {
		$value = array('response' => -2);
		header('Content-Type: application/json;');
		echo json_encode($value);
	}
?>