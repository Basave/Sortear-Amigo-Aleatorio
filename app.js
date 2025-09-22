//Se crea la lista de amigos.
let listaDeAmigosSorteados = [];
//Limite de lista de amigos.
let limiteDeLista = 5;
//Funcion para maniipular el DOM.
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}   
//Funcion para agregar al amigo desde el boton
function agregarAmigo(){
    let nombreIngresado = document.getElementById('amigo').value.trim();
        if (nombreIngresado === '') {
        alert('No puedes dejar el campo vacío...');
    } else if(listaDeAmigosSorteados.length < limiteDeLista){
        // Agregar al array
        listaDeAmigosSorteados.push(nombreIngresado);
        // Seleccionar la lista y limpiar
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        // Construir todo el HTML de la lista
        let listaHTML = "";
        for (let i = 0; i < listaDeAmigosSorteados.length; i++) {
            listaHTML += `<li>${listaDeAmigosSorteados[i]}</li>`;
        }
        // Insertar en el DOM
        lista.innerHTML = listaHTML;
        //Limpia el campo de texto
        limpiarCampoTexto();
        // Mostrar en consola
        console.log(listaDeAmigosSorteados);
            asignarTextoElemento('#resultado','');
    }else{
        asignarTextoElemento('h2','La lista esta llena, intenta sortear a los amigos');
        //Indica que la lista de amigos se a llenado
        console.log('La lista de amigos se ha llenado...');
        limpiarCampoTexto();
    }
}

//Funcion que limpia el campo de texto
function limpiarCampoTexto(){
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    let nombreSorteado = Math.floor(Math.random() * listaDeAmigosSorteados.length);
    if(listaDeAmigosSorteados.length === 0){
                    asignarTextoElemento('#resultado','')

        asignarTextoElemento('#listaAmigos','No has agregado a ningun amigo...');
    }else{
    asignarTextoElemento('#resultado',`El nombre sorteado fue: ${listaDeAmigosSorteados[nombreSorteado]}`)
    console.log(listaDeAmigosSorteados[nombreSorteado]);
    funcionesIniciales();
    }
}

function funcionesIniciales(){
    listaDeAmigosSorteados = [];
    asignarTextoElemento('h2','Ingresa el nombre de tus amigos');
}

document.getElementById('amigo').addEventListener('input', function() {
    this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
});













