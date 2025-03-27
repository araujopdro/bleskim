import header_img from '../assets/imgs/living.png'
import background from '../assets/imgs/fundo.jpg'
// import logo_img from '../assets/imgs/logo.png'

document.body.style.backgroundImage = `url("${background}")`;

$( document ).ready(function() {

    // const logo = document.getElementById('logo');
    //       logo.src = logo_img


    const header = document.getElementById('logo_header');
    header.src = header_img
});
