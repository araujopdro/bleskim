import logo_img from '../assets/imgs/hsi_logo.jpg'

const folder = 'hsi-live'

$( document ).ready(function() {
    const logo = document.getElementById('logo');
    logo.src = logo_img

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const user = urlParams.get('user')

    $.ajax({
        url: `https://bleskim.com/${folder}/php/get_messages.php`,
        type:'GET',
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        success: function(data)
        {	
            console.log(data)
            let keys = Object.keys(data[0])

            keys.forEach((k) => {
                $("#titulos").append(`<th scope="col">${k}</th>`)
            });

            data.forEach((q, idx) => {
                $("#perguntas").append(`
                    <tr>
                        <td>${q.id}</td>
                        <th scope="row">${q.email}</th>
                        <td>${q.mensagem}</td>
                        <td>${q.data}</td>
                    </tr>`)
            });
        }               
    });

});
