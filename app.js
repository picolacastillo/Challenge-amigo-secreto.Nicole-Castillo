// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array donde guardaremos los nombres de los amigos
let listaAmigos = [];

//Funcion para agregar un amigo a la lista
function agregarAmigo() {
    //Obtener el valor que escribio el usuario en el input con id "amigo"
let input = document.getElementById("amigo");
let nombre = input.value.trim(); // Quitar espacios al inicio y al final


//Valida que el nombre no este vacio
if (nombre === "") {
    alert ("Por favor ingresar un nombre valido")
    return; // Salir de la funcion si no es valido

}

//Valida que el nombre no este repetido en la lista
if (listaAmigos.includes(nombre)) {
    alert ("Este nombre ya esta en la lista");
    return; // Salir si ya existe

}

//Valida que el nombre no este repetido en la lista
if (!isNaN(nombre))  {
alert ("Por favor ingrese un nombre, y no un numero")
return; // Salir si es un numero

}

//Si paso todas las validaciones, agregar el nombre a la lista
listaAmigos.push(nombre);

//Mostrar la lista actualizada en pantalla
mostrarLista();
input.value = ""; //Limpiar el campo de input para que el usuario pueda agregar otro nombre

}

//Funcion para mostar los nombres de la lista en el html
function mostrarLista() {

    //Obtener  el elemento <ul> donde se mostraran los nombres
    let listaHTML = document.getElementById("listaAmigos");

    //Vaciar la lista para evistar duplicados al mostrarlos
    listaHTML.innerHTML  = "";

    //Recorres cada nombre en el array  listaAmigos
    listaAmigos.forEach(element => {
    
        //Crear un elemento <li> para cada nombre
        let li = document.createElement("li");
        li.textContent = element;//Poner el nombre como texto dentro del <li>

        //Agregar el <li> al <ul> en el HTML
        listaHTML.appendChild(li);
        
    });


}

//Funcion para sortear un amigo de la lista
function sortearAmigo() {

    //Verificar que la lista no este vacia
    if (listaAmigos.length === 0) {
        alert ("No hay nombre para sortear");
        return;// Salir si no hay nombres
    }

    //Generar un indice aleatorio entre 0 y el tamaño de la lista -1
    let indice = Math.floor(Math.random() * listaAmigos.length);

    //Obtener el nombre ganador usando el indice aleatorio
    let ganador = listaAmigos[indice];

    //Limpiar la lista despues del sorteo
    limpiarLista();

    //Mostrar el ganador en el elemento con id "resultado"
    document.getElementById("resultado").textContent = "Ganador/a: 🎊" + ganador + "🎊";
}

//Funcion para limpiar la lista  de amigos y actualizar la pantalla
function limpiarLista() {

    //Vaciar el array listaAmigos sin perder la referencia
    listaAmigos.length = 0;

    //Actualizar la lista en pantalla para mostrarla vacia
    mostrarLista();

}







