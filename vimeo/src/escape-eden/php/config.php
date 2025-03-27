<?php
$server = 'webcastlogin.vocsmultimidia.com.br';$database = 'webcastlogin';$user = 'webcastlogin';$pass = '120705';
$bd = mysqli_connect($server, $user, $pass, $database); 
date_default_timezone_set('America/Sao_Paulo');
$data = date('d/m/Y H:i:s', time());

$table = "escapeeden_052024";
$table_logs = "escapeeden_052024_logs";
$table_messages = "escapeeden_052024_msgs";

if ($mysqli->connect_errno) {
    echo "Erro de conexão com localhost, o seguinte erro ocorreu -> ";
    echo "Error: Erro de conexão com banco de dados, o seguinte erro ocorreu -> \n";
    echo "Errno: " . $mysqli->connect_errno . "\n";
    echo "Error: " . $mysqli->connect_error . "\n";
}?>