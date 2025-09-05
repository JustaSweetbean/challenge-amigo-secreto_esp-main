// Define las variables necesarias
let listaAmigos = [];
let nombreAmigo = 0;

// Desarrollo una función para agregar amigos a la lista

function agregarAmigo () {
    nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo);
    
    // Corroborar que se haya agregado un nombre
    if (nombreAmigo == '') {
        alert('inserte un nombre válido');
    } else {
        listaAmigos.push(nombreAmigo);
        limpiarCaja ();
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function CrearLista (elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
}