import logo_img from '../assets/imgs/logo.jpg'

import background from '../assets/imgs/fundo.png'
document.body.style.backgroundImage = `url("${background}")`;

const folder = 'the-edition-living'

$( document ).ready(function() {
    console.log('form.js')
    const logo_header = document.getElementById('logo_header');
    logo_header.src = logo_img
    $( "#form" ).submit(function( e ) {
        e.preventDefault();
        let email = $('#email').val();
        // autenticar
        // if(email.includes("associadolopes.com.br") || email.includes("lopes.com.br") || email.includes("cyrela.com.br") ||
        // email.includes("lavvi.com.br") || email.includes("liorassociados.com.br") || email.includes("corretorassociadolopes.com.br") ||
        // email.includes("corretorassociadolopes.com.br") || email.includes("vendascyrela.com.br") || email.includes("sellerassociados.com.br")){
        //     $.ajax({
        //         url: `https://bleskim.com/${folder}/php/autenticar.php`,
        //         type:'POST',
        //         contentType: "application/x-www-form-urlencoded;charset=utf-8",
        //         data:
        //         {
        //             email: $('#email').val(),
        //         },
        //         success: function(msg)
        //         {	
        //             console.log(msg)
        //             if(msg.response >= 0){
        //                 window.location.href=`?user=${msg.response}#live`;
        //             }else{
        //                 $.ajax({
        //                     url: `https://bleskim.com/${folder}/php/cadastro.php`,
        //                     type:'POST',
        //                     contentType: "application/x-www-form-urlencoded;charset=utf-8",
        //                     data:
        //                     {
        //                         email: $('#email').val(),
        //                         identificacao: $('input[name="radiobtn"]:checked').val()
        //                     },
        //                     success: function(msg)
        //                     {	
        //                         if(msg.response >= 0){
        //                             window.location.href=`?user=${msg.response}#live`;
        //                         }else{
        //                             alert("Erro no cadastro do e-mail, entre em contato com a organização do evento.")
        //                         }
        //                     }               
        //                 });
        //             }
        //         }               
        //     });
        // } else {
        //     alert("E-mail inválido. Entre em contato com a organização do evento.")
        // }

        $.ajax({
            url: `https://bleskim.com/${folder}/php/cadastro.php`,
            type:'POST',
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            data:
            {
                nome: $('#nome').val(),
                email: $('#email').val()
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

    });
});