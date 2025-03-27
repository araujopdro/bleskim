<?php
// session_start();
// if (empty($_SESSION['user_id']) || empty($_SESSION['user_session_id'])) {
//     header("Location: index.php");
//     exit;
// }
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
    crossorigin="anonymous">
    <link rel="stylesheet" href="css/home.css">
    <style>
        .video iframe {
            width: 100%;
            height: 800px;
            max-height: 800px;
        }
    </style>
</head> 

<body >
<nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div class="container-fluid">
            <a class="navbar-brand" href="http://domaarquitetura.com.br/" target="_blank">
                <img class="logo-doma" src="images/logo-doma.jfif" alt="Logo Doma Arquitetura">
            </a>
            <span class="navbar-text ms-auto">
                <div class="navbar-text-div text-white">Bem vindo ao curso de arquitetura da Doma!</div>
                <div>
                    <a href="logout.php" class="btn btn-danger">Sair</a>
                </div>
            </span>
        </div>
    </nav>

    <main class="video">
    <div style="padding-top: 20px; display: flex; justify-content: center">
        <iframe src="https://vimeo.com/event/3730639/embed" frameborder="0"
             allow="autoplay; fullscreen; picture-in-picture">
            </iframe>
            </div>
        <div style="padding-bottom: 20px; display: flex; justify-content: center">
        <iframe src="https://vimeo.com/live/interaction_tools/live_event/3730639" width="100%" height="100%" frameborder="0"></iframe>
        </div>
    </main>
   
    <footer class="bg-dark text-center text-white">
        <div class="container p-4">
            <a class="btn btn-outline-light btn-floating m-1" 
            href="https://www.instagram.com/domaarquitetura/" target="_blank" role="button">
                <img src="images/logo-ig.webp" alt="Logo Instagram" width="15" height="15">
            </a>
            <a class="btn btn-outline-light btn-floating m-1" 
            href="https://www.youtube.com/channel/UCQbdsX9AVd8sF35p8825NcQ" target="_blank" role="button">
                <img src="images/yt-logo.avif" alt="Logo Youtube" width="15" height="15">
            </a>
        </div>
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2023 Doma Arquitetura
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-LE+XqVgk7GNh7EmG8G9RH0yAYP+QIxO6/3TsvKDDdhxpjH63I0RxWhvabBTE2wzg"
        crossorigin="anonymous">
    </script>
    
    <script>
        function check_session_id() {
            var session_id = "<?php echo $_SESSION['user_session_id']; ?>";

            fetch('check_login.php')
                .then(function(response){
                    return response.json();
                })
                .then(function(responseData){
                    if(responseData.output == 'logout') {
                        window.location.href = 'logout.php';
                    }
                });
        }

        setInterval(function(){
            check_session_id();
        }, 30000);
    </script>
</body>
</html>
