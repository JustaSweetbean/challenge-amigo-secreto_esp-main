// Define las variables necesarias
let AmigosIngresados = [];
let nombreAmigo = 0;
let listaItems = 0;
let amigoSorteado = 0;

// Desarrollo una función para agregar amigos a la lista

function agregarAmigo () {
    nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo);
    
    // Corroborar que se haya agregado un nombre
    if (nombreAmigo == '') {
        alert('inserte un nombre válido');
    } else {
        AmigosIngresados.push(nombreAmigo);
        console.log(AmigosIngresados)
        limpiarCaja ();
        mostrarNombres ();
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarNombres () {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    // Recorrer el array y crear un <li> para cada nombre
    for (let i = 0; i < AmigosIngresados.length; i++) {
          console.log(AmigosIngresados[i]);
        listaItems = document.createElement('li');
        listaItems.textContent = AmigosIngresados[i];
        listaHTML.appendChild(listaItems);
        }   
}

function sortearAmigo() {
    
    if (AmigosIngresados != '') {
        amigoSorteado = Math.floor(Math.random()* AmigosIngresados.length);
        console.log(amigoSorteado)
        let listaResultadoHTML = document.getElementById('resultado');
        listaResultadoHTML.innerHTML = (AmigosIngresados[amigoSorteado]);
    } 
}