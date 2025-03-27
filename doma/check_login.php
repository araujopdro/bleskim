<?php 
include 'database_connection.php';
session_start();

try {
    $query = "SELECT user_session_id FROM user_login WHERE user_id = :user_id";
    $statement = $connect->prepare($query);
    $statement->bindValue(':user_id', $_SESSION['user_id'], PDO::PARAM_INT);
    $statement->execute();

    $row = $statement->fetch(PDO::FETCH_ASSOC);

    if ($row && $_SESSION['user_session_id'] == $row['user_session_id']) {
        $output = 'login';
    } else {
        $output = 'logout';
    }
} catch (PDOException $e) {
    $output = 'error';
}

$data['output'] = $output;

echo json_encode($data);
?>
