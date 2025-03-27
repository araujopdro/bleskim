import logo_img from '../assets/imgs/hsi_live.jpg'
// import rodape_img from '../assets/imgs/rodape.png'
// import efeito_img from '../assets/imgs/efeito.png'
import fundo_img from '../assets/imgs/fundo.png'

const folder = 'hsi-live'

$( document ).ready(function() {
    console.log('form.js')
    const logo_header = document.getElementById('logo_header');
    logo_header.src = logo_img
    const logo_header_cadastro = document.getElementById('logo_header_cadastro');
    logo_header_cadastro.src = logo_img


    document.getElementById('swap_cadastro').onclick = ()=>{
        console.log("swap")
        $("#cadastro_form").show()
        $("#form_login").hide()
    }

    document.body.style.backgroundImage = `url(${fundo_img})`

    // const efeito_form = document.getElementById('efeito_form');
    // efeito_form.src = efeito_img

    $( "#form_login" ).submit(function( e ) {
        e.preventDefault();
        console.log($('#login_email').val())
        $.ajax({
                url: `https://bleskim.com/${folder}/php/autenticar.php`,
                type:'POST',
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                data:
                {
                    email: $('#login_email').val(),
                },
                success: function(msg)
                {	
                    console.log(msg)
                    if(msg.response >= 0){
                        window.location.href=`?user=${msg.response}&a=${btoa(msg.name)}&b=${btoa($('#login_email').val())}#live`;
                    }else{
                        alert("Email não encontrado, realize seu cadastro.")
                    }
                }
            })
    })

    $( "#cadastro_form" ).submit(function( e ) {
        let fundos = []
        $("input:checkbox[name=fundo]:checked").each(function(){
            fundos.push($(this).val());
        });
        e.preventDefault();

        console.log($('#login_email').val())

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
                                nome: $('#nome').val(),
                                email: $('#email').val(),
                                empresa: $('#empresa').val(),
                                fundo: fundos.toString(),
                                aceito: $('input[name="radiobtn"]:checked').val()
                            },
                            success: function(msg)
                            {	
                                if(msg.response >= 0){
                                    console.log("SEND MESSAGE")
                                    $.ajax({
                                        url: 'php/send_message.php',
                                        type:'POST',
                                        contentType: "application/x-www-form-urlencoded;charset=utf-8",
                                        data:
                                        {
                                          email: `${$('#nome').val()} | ${$('#email').val()}`,
                                          mensagem: $('#pergunta').val()
                                        },     
                                        success: function(msg){
                                            window.location.href=`?user=${msg.response}&a=${btoa($('#nome').val())}&b=${btoa($('#email').val())}#live`;
                                        }       
                                    });
                                
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