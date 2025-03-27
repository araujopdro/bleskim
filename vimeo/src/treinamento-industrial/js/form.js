
import logo_img from '../assets/imgs/logo.png'
import aquarela_left_img from '../assets/imgs/aquarela-left.png'
import aquarela_right_img from '../assets/imgs/aquarela-right.png'
import header_img from '../assets/imgs/header.png'

const folder = 'treinamento-industrial'

$( document ).ready(function() {
    const aqua_r = document.getElementById('aquarela_right');
    aqua_r.src = aquarela_right_img
    const aqua_l = document.getElementById('aquarela_left');
    aqua_l.src = aquarela_left_img

    const logo_el = document.getElementById('logo_header');
    logo_el.src = logo_img
    $( "#form" ).submit(function( e ) {
        e.preventDefault();
        let email = $('#email').val();
        // autenticar
  //      if(email.includes("lopes.com.br") || email.includes("cyrela.com.br") || email.includes("sellerassociados.com.br")){
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
                                email: $('#email').val(),
                                identificacao: $('input[name="radiobtn"]:checked').val()
                            },
                            success: function(msg)
                            {	
                                if(msg.response >= 0){
                                    window.location.href=`?user=${msg.response}#live`;
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