import wpp_img from '../assets/imgs/wpp.png'
import btn_img from '../assets/imgs/entrar.png'
// import living_img from '../assets/imgs/living.png'
// import logo_img from '../assets/imgs/logo.png'

//document.body.style.backgroundImage = `url("${background}")`;

const folder = 'escape-eden'
import background from '../assets/imgs/fundo2.jpg'
document.body.style.backgroundImage = `url("${background}")`;

$(document).ready(function () {
    const btn_submit = document.getElementById('btn_submit');
    btn_submit.style.backgroundImage = `url("${btn_img}")`;

    // const logo = document.getElementById('logo');
    // logo.src = logo_img

    const wpp = document.getElementById('wpp');
    wpp.src = wpp_img
    $("#form").submit(function (e) {
        e.preventDefault();

        let email = $('#email').val();
        console.log(email)
        // if (email.includes("lopes.com.br") || email.includes("cyrela.com.br") || email.includes("sellerassociados.com.br")) {
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