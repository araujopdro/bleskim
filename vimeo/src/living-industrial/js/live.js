// import logo_img from '../assets/imgs/logo.jpg'

// import background from '../assets/imgs/fundo.png'
// document.body.style.backgroundImage = `url("${background}")`;

// $( document ).ready(function() {
//     console.log('live.js')
//     const logo_header = document.getElementById('logo_header');
//     logo_header.src = logo_img
// });

import aquarela_left_img from '../assets/imgs/aquarela-left.png'
import aquarela_right_img from '../assets/imgs/aquarela-right.png'

$( document ).ready(function() {
    const aqua_r = document.getElementById('aquarela_right');
    aqua_r.src = aquarela_right_img
    const aqua_l = document.getElementById('aquarela_left');
    aqua_l.src = aquarela_left_img
})