import logo_img from '../assets/imgs/logo.png'

import background from '../assets/imgs/fundo.png'
document.body.style.backgroundImage = `url("${background}")`;

$( document ).ready(function() {
    const logo_header = document.getElementById('logo_header');
    logo_header.src = logo_img
});
