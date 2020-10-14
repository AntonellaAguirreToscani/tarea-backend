function processParams() {
    let paramstr = window.location.search.substr(1);
    let paramarr = paramstr.split("&");
    let params = [];
    paramarr.forEach(item=>{
        let tmparr = item.split("=");
        params[tmparr[0]] = tmparr[1];
    })
    return params;
}
async function load() {
    let container = document.querySelector('#load');
    try {
        let params = processParams();
        await fetch(`/vehiculos/${params["patente"]}`)
            .then(response => response.json())
            .then(data => {
                document.querySelector("#patente").innerHTML = data['_patente'];
                document.querySelector("#marca").innerHTML = data['_marca'];
                document.querySelector("#modelo").innerHTML = data['_modelo'];
                document.querySelector("#anio").innerHTML = data['_anio'];
                document.querySelector("#precio").innerHTML = data['_precio'];
                console.log(data);
            });
    }
    catch (response) {
        console.log(response);
        container.innerHTML = "<h1>Connection error</h1>";
    };
}
load();

