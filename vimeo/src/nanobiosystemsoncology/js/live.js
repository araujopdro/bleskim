import header_img from '../assets/imgs/header.png'
import rodape_img from '../assets/imgs/rodape.png'


const urlParams = new URLSearchParams(window.location.search);
const session_id = urlParams.get('ssid');

$( document ).ready(function() {
    const header = document.getElementById('header');
    header.src = header_img
    
    const rodape = document.getElementById('rodape');
    rodape.src = rodape_img

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
                alert("Message sent!"); 
            }             
        });    
    });
});

const folder = 'nanobiosystemsoncology'
function check_session_id() {
    $.ajax({
        url: `https://bleskim.com/${folder}/php/check_login.php`,
        type:'POST',
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        data:
        {
            ssid: session_id
        },
        success: function(msg)
        {	
            if(typeof msg.response !== 'string'){
                window.location.href=`?ssid=${-1}`;
            }
        }               
    });
}

setInterval(function(){
    check_session_id();
}, 5000);