<?php
include 'database_connection.php';
$message = '';

if (isset($_POST["login_button"])) {
    $formdata = array();

    if (empty($_POST["usuario"])) {
        $message .= '<li>O campo E-mail é obrigatório</li>';
    } else {
        if (!filter_var($_POST["usuario"], FILTER_VALIDATE_EMAIL)) {
            $message .= '<li>Endereço de e-mail inválido</li>';
        } else {
            $formdata['user_email'] = $_POST['usuario'];
        }
    }

    if (empty($_POST['senha'])) {
        $message .= '<li>O campo Senha é obrigatório</li>';
    } else {
        $formdata['user_password'] = $_POST['senha'];
    }

    if ($message == '') {
        $data = array(
            ':user_email' => $formdata['user_email']
        );

        $query = "
        SELECT * FROM user_login 
        WHERE user_email = :user_email
        ";

        $statement = $connect->prepare($query);

        $statement->execute($data);

        if ($statement->rowCount() > 0) {
            $row = $statement->fetch();
            if ($row['user_password'] == $formdata['user_password']) {
                session_start();
                session_regenerate_id(true); // Regenerate session ID and delete the old session file
                $user_session_id = session_id();

                $query = "
                    UPDATE user_login 
                    SET user_session_id = '".$user_session_id."' 
                    WHERE user_id = '".$row['user_id']."'
                ";

                $connect->query($query);
                $_SESSION['user_id'] = $row['user_id'];
                $_SESSION['user_session_id'] = $user_session_id;
                session_set_cookie_params(0); // Set session cookie to expire when browser is closed
                header('location:home.php');
                exit;
            }else {
                $message = '<li>Senha incorreta</li>';
            }
        }else{
            $message = '<li>Endereço de e-mail incorreto</li>';
        }
    }
}

?>

<!doctype html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <style>
        body {
            background-color: #f2f2f2;
        }

        .login {
            width: 100%;
            height: 100vh;
            align-items: center;
            justify-content: center;
            display: flex;
        }
        
        .card {
           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>

<body>
    <div class="login">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 offset-lg-4">
                    <div class="card">
                        <div class="card-body text-center align-middle ">
                            <h3>Login</h3>
                        </div>
                        <div class="card-body">
                            <?php 
                            if($message != '')
                            {
                                echo '<div class="alert alert-danger"><ul>'.$message.'</ul></div>';
                            }
                            ?>
                            <form method="POST">
                                <div>
                                    <div class="mb-3">
                                        <label>E-mail</label>
                                        <input type="text" name="usuario" class="form-control">
                                    </div>
                                </div>
                                <div>
                                    <div class="mb-3">
                                        <label>Senha</label>
                                        <input type="password" name="senha" class="form-control">
                                    </div>
                                </div>
                                <div class="text-center">
                                    <div class="mb-3">
                                        <button type="submit" name="login_button" class="btn btn-primary">Acessar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
