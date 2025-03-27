import header_img from '../assets/imgs/top.jpg'
// import living_img from '../assets/imgs/living.png'
// import logo_img from '../assets/imgs/logo.png'

//document.body.style.backgroundImage = `url("${background}")`;

const folder = '25h-by-living'
import background from '../assets/imgs/fundo.jpg'
document.body.style.backgroundImage = `url("${background}")`;

$(document).ready(function () {

    const header = document.getElementById('logo_header');
    header.src = header_img

    // const logo = document.getElementById('logo');
    // logo.src = logo_img

    // const living = document.getElementById('living');
    // living.src = living_img
    $("#form").submit(function (e) {
        e.preventDefault();
        let email = $('#email').val();
        // autenticar
      //  if (email.includes("lopes.com.br") || email.includes("cyrela.com.br") || email.includes("sellerassociados.com.br")) {
            $.ajax({
                url: `https://bleskim.com/${folder}/php/cadastro.php`,
                type: 'POST',
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                data:
                {
                    email: $('#email').val(),
                    identificacao: $('input[name="radiobtn"]:checked').val()
                },
                success: function (msg) {
                    if (msg.response >= 0) {
                        window.location.href = `?user=${msg.response}#live`;
                    } else {
                        alert("Erro no cadastro do e-mail, entre em contato com a organização do evento.")
                    }
                }
            });
        // } else {
        //     alert("E-mail inválido. Entre em contato com a organização do evento.")
        // }

    });
});