import header_img from '../assets/imgs/header.png'
import logo_img from '../assets/imgs/logo.png'

const folder = 'totvs'

$( document ).ready(function() {
    const header = document.getElementById('header');
    header.src = header_img

    const logo = document.getElementById('logo');
    logo.src = logo_img

    $( "#form" ).submit(function( e ) {
        e.preventDefault();
        let email = $('#email').val();
        // autenticar
        // if(email.includes("ghiimobiliaria.com.br") || email.includes("cyrela.com.br") || email.includes("vendascyrela.com.br") ||
        // email.includes("sellerassociados.com.br")){
            // $.ajax({
            //     url: `https://bleskim.com/${folder}/php/autenticar.php`,
            //     type:'POST',
            //     contentType: "application/x-www-form-urlencoded;charset=utf-8",
            //     data:
            //     {
            //         email: $('#email').val(),
            //     },
            //     success: function(msg)
            //     {	
            //         console.log(msg)
            //         if(msg.response >= 0){
            //             window.location.href=`?user=${msg.response}#live`;
            //         }else{
                        $.ajax({
                            url: `https://bleskim.com/${folder}/php/cadastro.php`,
                            type:'POST',
                            contentType: "application/x-www-form-urlencoded;charset=utf-8",
                            data:
                            {
                                nome: $('#nome').val(),
                                email: $('#email').val(),
                                org: $('#org').val(),
                                cnpj: $('#cnpj').val(),
                                cel: $('#cel').val()
                            },
                            success: function(msg)
                            {	
                                if(msg.nome && msg.email){
                                    window.location.href=`?a=${btoa(msg.nome)}&b=${btoa(msg.email)}#live`;
                                }else{
                                    alert("Erro no cadastro do e-mail, entre em contato com a organização do evento.")
                                }
                            }               
                        });
        //             }
        //         }               
        //     });
        //  } else {
        //      alert("E-mail inválido. Entre em contato com a organização do evento.")
        //  }

        // $.ajax({
        //     url: `https://bleskim.com/${folder}/php/cadastro.php`,
        //     type:'POST',
        //     contentType: "application/x-www-form-urlencoded;charset=utf-8",
        //     data:
        //     {
        //         identificacao: $('input[name="radiobtn"]:checked').val(),
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