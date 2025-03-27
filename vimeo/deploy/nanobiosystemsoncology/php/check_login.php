<?php 
    session_start();
    include_once("config.php");

    date_default_timezone_set('America/Sao_Paulo');
    $data = date('d/m/Y H:i:s', time());
	
	if ($stmt = $bd->prepare("SELECT id, ssid FROM ".$table." WHERE ssid = ?")) {
		$stmt->bind_param('s', $_POST['ssid']);
		$stmt->execute();
		$stmt->store_result();

		if ($stmt->num_rows > 0) {
			$stmt->bind_result($id, $ssid);
			$stmt->fetch();

            $value = array('response' =>  $_POST['ssid']);
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
