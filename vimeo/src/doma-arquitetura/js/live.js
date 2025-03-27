import header_img from '../assets/imgs/header.png'

document.body.style.backgroundImage = `url("")`;

const urlParams = new URLSearchParams(window.location.search);
const session_id = urlParams.get('ssid');

$( document ).ready(function() {
    const header = document.getElementById('header');
    header.src = header_img
});

const folder = 'teste-doma'
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