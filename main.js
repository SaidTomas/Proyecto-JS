alert("Bienvenidos a Doron");
//DESAFIO FUNCION
/*
const x = 5;
let carrito = 0;
const remeras = 1000;
const buzos = 3000;
const pantalones = 4000;
let cantidadRemeras;
let cantidadBuzos;
let cantidadPantalones;

function catalogo() {
    for (let i = 0; i < x; i++) {
        let ingreso = parseInt(
            prompt("Catalogo: \n 1-Remeras \n 2-Buzos \n 3-Pantalones \n 4-Salir")
        );
        if (ingreso == 1) {
            cantidadRemeras = parseInt(prompt("Ingrese cantidad de remeras"));
            carrito += cantidadRemeras * remeras;
        } else if (ingreso == 2) {
            cantidadBuzos = parseInt(prompt("Ingrese cantidad de buzos"));
            carrito += cantidadBuzos * buzos;
        }
        if (ingreso == 3) {
            cantidadPantalones = parseInt(prompt("Ingrese cantidad de pantalones"));
            carrito += cantidadPantalones * pantalones;
        } else if (ingreso == 4) {
            console.log(
                `El total de la compra es: $ ${carrito} \n remeras : ${cantidadRemeras} \n buzos : ${cantidadBuzos} \n pantalones : ${cantidadPantalones}`
            );
            break;
        }
    }
}
catalogo(x); */

//DESAFIO ARRAYS
/*
let productos = {
    remeras : 1000,
    pantalones : 4000,
    buzos : 3000,
};
let remeras = productos ["remeras"];
let pantalones = productos ["pantalones"];
let buzos = productos ["buzos"];

console.log(`En un principio tenemos remeras que cuestan ${remeras},
tambien tenemos pantalones que estan ${pantalones} y por
ultimo tenemos unos buzos que te quedan a ${buzos}`);  */




const productos = newFunction();

function newFunction() {
    return [{
        id: 1,
        nombre: 'Remeras',
        precio: 1500
    }, {
        id: 2,
        nombre: 'Jeans',
        precio: 4000
    }, {
        id: 3,
        nombre: 'Hoddies',
        precio: 5000
    }, {
        id: 4,
        nombre: 'Campereas',
        precio: 6000
    }];
}

    for (const producto of productos) {
        let contenedor = document.createElement("div");

        contenedor.innerHTML = `<h3> ID: ${producto.id} </h3>
        <p> ID: ${producto.nombre} </p>
        <b> ID: ${producto.precio} </b>`;

        document.body.appendChild (contenedor);
    } 
