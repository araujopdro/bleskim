const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/": "./pages/form.html",
    "#live": "./pages/live.html",
};

const scripts = {
    "/": "/js/form.js",
    "#live": "/js/live.js",
};

const handleLocation = async () => {
    let path = window.location.hash
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const user = urlParams.get('user')

    if(path == "") path = "/"
    // if(path == "#live" && !user) {
    //     alert("Usuário não autenticado"); 
    //     window.location.href='./';
    // }

    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("app-main").innerHTML = html;


    if(scripts[path]){
        let s = document.createElement("script");
            s.type = "text/javascript";
            s.src = "."+scripts[path]
        document.body.prepend(s);
    }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();