import logo_img from '../assets/imgs/logo.jpg'

document.body.style.backgroundImage = `url("")`;

$( document ).ready(function() {
    console.log('live.js')
    const logo_header = document.getElementById('logo_header');
    logo_header.src = logo_img
});
