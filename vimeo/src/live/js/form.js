import logo_img from '../assets/imgs/header.png'
// import rodape_img from '../assets/imgs/rodape.png'
// import efeito_img from '../assets/imgs/efeito.png'

const folder = 'live'

$( document ).ready(function() {
    console.log('form.js')
    const logo_header = document.getElementById('logo_header');
    logo_header.src = logo_img


    // const rodape = document.getElementById('rodape');
    // rodape.src = rodape_img

    // const efeito_form = document.getElementById('efeito_form');
    // efeito_form.src = efeito_img

    $( "#form" ).submit(function( e ) {
        e.preventDefault();
        let email = $('#email').val();
        // autenticar
        //if(email.includes("lopes.com.br") || email.includes("cyrela.com.br") || email.includes("sellerassociados.com.br")){
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