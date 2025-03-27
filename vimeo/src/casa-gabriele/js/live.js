// import header_img from '../assets/imgs/top.png'
// import background from '../assets/imgs/fundo.png'
// import logo_img from '../assets/imgs/logo.png'
import casa_img from '../assets/imgs/casa.png'
import cy_img from '../assets/imgs/cy.png'

const folder = 'casa-gabriele'
import background from '../assets/imgs/fundo.jpg'
document.body.style.backgroundImage = `url("${background}")`;

$( document ).ready(function() {

    document.getElementById('casa_logo').src = casa_img;
    document.getElementById('cy_logo').src = cy_img;
    // const logo = document.getElementById('logo');
    //       logo.src = logo_img


    // const header = document.getElementById('logo_header');
    // header.src = header_img
});
