import logo_img from '../assets/imgs/hsi_logo.jpg'
import fundo_img from '../assets/imgs/fundo.png'

// import background from '../assets/imgs/fundo.png'
// document.body.style.backgroundImage = `url("${background}")`;

console.log(window.logged_email)

$( document ).ready(function() {
    console.log('live.js')
    const logo_header = document.getElementById('logo_header');
    logo_header.src = logo_img

    document.body.style.backgroundImage = `url(${fundo_img})`

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const a = urlParams.get('a')
    const b = urlParams.get('b')

    $( "#send-message" ).submit(function( e ) {
        e.preventDefault();
        $('#entrar').prop("disabled",true);

        $.ajax({
            url: 'php/send_message.php',
            type:'POST',
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            data:
            {
              email: `${atob(a)} | ${atob(b)}`,
              mensagem: $('#mensagem').val()
            },
            success: function(msg)
            {   
                $('#mensagem').val("");
                $('#entrar').removeAttr("disabled");
                alert("Mensagem enviada com sucesso."); 
            }             
        });    
    });
});
