<?php
$server = '127.0.0.1:3306';$database = 'u923740094_sislogin';$user = 'u923740094_root';$pass = 'H2y$g7fCrR/';
$bd = mysqli_connect($server, $user, $pass, $database); 
date_default_timezone_set('America/Sao_Paulo');
$data = date('d/m/Y H:i:s', time());

$table = "live_hsi_03122024";
$table_logs = "live_hsi_03122024_logs";
$table_messages = "live_hsi_03122024_msgs";
