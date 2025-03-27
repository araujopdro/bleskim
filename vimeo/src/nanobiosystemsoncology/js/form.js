
import header_img from '../assets/imgs/header.png'
import background from '../assets/imgs/fundo.jpg'
//document.body.style.backgroundImage = `url("${background}")`;

const urlParams = new URLSearchParams(window.location.search);
const session_id = urlParams.get('ssid');

if(session_id == -1) alert("Sessão encerrada. Acesso detectado em outra aba ou navegador.")

const folder = 'nanobiosystemsoncology'
$( document ).ready(function() {
    const header = document.getElementById('header');
    header.src = header_img

    $( "#form" ).submit(function( e ) {
        e.preventDefault();
        // autenticar
        $.ajax({
            url: `https://bleskim.com/${folder}/php/autenticar.php`,
            type:'POST',
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            data:
            {
                email: $('#email').val(),
                nome: $('#nome').val(),
            },
            success: function(msg)
            {	
                console.log(msg)
                if(typeof msg.ssid === 'string'){
                    window.location.href=`?ssid=${msg.ssid}&a=${btoa(msg.nome)}&b=${btoa(msg.email)}#live`;
                }else{
                    if(msg.response == -1) alert('The email address you entered is invalid. Please reach out to the event organizers for assistance.')
                    else if(msg.response == -2) alert('Senha inválida, entre em contato com a organização do evento.')
                }
            }               
        });
        

        // $.ajax({
        //     url: `https://bleskim.com/${folder}/php/cadastro.php`,
        //     type:'POST',
        //     contentType: "application/x-www-form-urlencoded;charset=utf-8",
        //     data:
        //     {
        //         nome: $('#nome').val(),
        //         email: $('#email').val()
        //     },
        //     success: function(msg)
        //     {	
        //         console.log(msg)
        //         if(msg.response >= 0){
        //             window.location.href=`?user=${msg.response}#live`;
        //         }else{
        //             alert("Erro no cadastro do e-mail, entre em contato com a organização do evento.")
        //         }
        //     }               
        // });

    });
});