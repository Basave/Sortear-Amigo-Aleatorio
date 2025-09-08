let listaDeAmigosSorteados = [];
let limiteDeLista = 5;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}   

function agregarAmigo() {
    let nombreIngresado = document.getElementById('amigo').value.trim();
        if (nombreIngresado === '') {
        alert('No puedes dejar el campo vacío...');
    } else {
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
        console.log(typeof(limpiarCampoTexto))
        // Mostrar en consola
        console.log(listaDeAmigosSorteados);
    }
}

function limpiarCampoTexto(){
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    let nombreSorteado = Math.floor(Math.random(listaDeAmigosSorteados)*listaDeAmigosSorteados[i])+1; 
    console.log(nombreSorteado);

}

function funcionesIniciales(){
    listaDeAmigosSorteados = [];
}







