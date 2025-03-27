import logo_img from '../assets/imgs/logo.png'
import rodape_img from '../assets/imgs/rodape.png'

import background from '../assets/imgs/fundo.png'
document.body.style.backgroundImage = `url("${background}")`;

const folder = 'vista-cyrela'

$( document ).ready(function() {
    const logo_header = document.getElementById('logo_header');
    logo_header.src = logo_img
    const rodape_el = document.getElementById('rodape');
    rodape_el.src = rodape_img
    $( "#form" ).submit(function( e ) {
        e.preventDefault();
        let email = $('#email').val();

        if(email.includes("vendascyrela.com.br") || email.includes("cyrela.com.br") || email.includes("sellerassociados.com.br")){

            $.ajax({
                url: `https://bleskim.com/${folder}/php/cadastro.php`,
                type:'POST',
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                data:
                {
                    email: $('#email').val(),
                    identificacao: $('input[name="radiobtn"]:checked').val()
                },
                success: function(msg)
                {	
                    console.log(msg)
                    if(msg.response >= 0){
                        window.location.href=`?user=${msg.response}#live`;
                    }else{
                        alert("Erro no cadastro do e-mail, entre em contato com a organização do evento.")
                    }
                }               
            });
        } else {
            alert("E-mail inválido. Entre em contato com a organização do evento.")
        }

    });
});