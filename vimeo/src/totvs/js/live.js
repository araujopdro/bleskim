import logo_img from '../assets/imgs/logo.png'

// import background from '../assets/imgs/fundo.png'
// document.body.style.backgroundImage = `url("${background}")`;

const folder = 'totvs'
$( document ).ready(function() {
    const logo = document.getElementById('logo');
    logo.src = logo_img

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const user = urlParams.get('a')
    const email = urlParams.get('b')

    $( "#form" ).submit(function( e ) {
        e.preventDefault();
        $.ajax({
            url: `https://bleskim.com/${folder}/php/send_message.php`,
            type:'POST',
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            data:
            {
                pergunta: $('#pergunta').val(),
                identificacao: atob(user) +" | "+ atob(email)
            },
            success: function(msg)
            {	
                if(msg.response >= 0){
                    alert("Mensagem enviado com sucesso.")
                    $('#pergunta').val('')
                }else{
                    alert("Erro ao enviar a mensagem, entre em contato com a organização do evento.")
                }
            }               
        });
    });

});
