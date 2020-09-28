let btnAgregar = document.querySelector('#btnAgregar');
btnAgregar.addEventListener('click', agregar);

let btnSalvar = document.querySelector('#btnSalvar');
btnSalvar.addEventListener('click', salvar);

let btnAutos = document.querySelector('#btnAutos');
btnAutos.addEventListener('click', consultarAutos);

let btnCamionetas = document.querySelector('#btnCamionetas');
btnCamionetas.addEventListener('click', consultarCamionetas);

let btnTodos = document.querySelector('#btnTodos');
btnTodos.addEventListener('click', consultarVehiculos);

let vehiculos = [];

async function mostrarTabla(array) {
    let html = "";
    let respuesta = await array;
    respuesta.forEach((item) => {
        html += `
        <tr>
        <th scope="row">${item.patente}</th>
        <td>${item.marca}</td>
        <td>${item.modelo}</td>
        <td>${item.anio}</td>
        <td>${item.precio}</td>
        <td>${item.tipo}</td>
        </tr>
        `
    });
    document.querySelector("#tabla-vehiculos").innerHTML = html;
}
async function mostrarRespuesta(array) {
    let html = "";
    let respuesta = await array;
    respuesta.forEach((item) => {
        html += `
        <tr>
        <th scope="row">${item._patente}</th>
        <td>${item._marca}</td>
        <td>${item._modelo}</td>
        <td>${item._anio}</td>
        <td>${item._precio}</td>
        <td>${item._tipo}</td>
        </tr>
        `
    });
    document.querySelector("#tabla-vehiculos").innerHTML = html;
}

function averiguarTipo() {
    let auto = document.querySelector('#inlineRadio1');
    return (auto.checked === true) ? 'auto' : 'camioneta';
}

function agregar() {
    console.log('agregar');
    let patente = document.querySelector('#patente').value;
    let marca = document.querySelector('#marca').value;
    let modelo = document.querySelector('#modelo').value;
    let anio = document.querySelector('#anio').value;
    let precio = document.querySelector('#precio').value;
    let tipo = averiguarTipo();

    let item = {
        "patente": patente,
        "marca": marca,
        "modelo": modelo,
        "anio": anio,
        "precio": precio,
        "tipo": tipo
    }
    try {
        vehiculos.push(item);
        mostrarTabla(vehiculos);
    }
    catch (error) {
        console.log(error);
    }
}

function reiniciarTabla() {
    document.querySelector("#tabla-vehiculos").innerHTML = '';
}

async function salvar() {
    console.log('Funcion Salvar');
    try {
        await fetch('http://localhost:3000/vehiculos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(vehiculos)
        }).then(reiniciarTabla());
    } catch (error) {
        console.log('No se pudieron salvar sus cambios');
    }
}
async function consultar(url) {
    try {
        await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(response => response.json())
            .then(data => {
                mostrarRespuesta(data);
            });

    } catch (error) {
        console.log(error.message);
    }
}
async function consultarAutos() {
    let url = 'http://localhost:3000/vehiculos/autos';
    consultar(url);
}
async function consultarCamionetas() {
    let url = 'http://localhost:3000/vehiculos/camionetas';
    consultar(url);
}

async function consultarVehiculos() {
    let url = 'http://localhost:3000/vehiculos';
    consultar(url);
}
