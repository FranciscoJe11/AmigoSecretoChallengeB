// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // Obtén el valor del input y elimina espacios en blanco

    if (nombre) {
        listaDeAmigos.push(nombre); // Agrega el nombre a la lista
        actualizarLista(); // Actualiza la lista mostrada en pantalla
        inputAmigo.value = ""; // Limpia el campo de texto
        inputAmigo.focus();
    } else {
        alert("Por favor, escribe un nombre válido.");
    }
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpia la lista antes de actualizar

    listaDeAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        listaHTML.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("La lista está vacía. Por favor, agrega al menos un amigo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length); // Generar índice aleatorio
    const amigoSeleccionado = listaDeAmigos[indiceAleatorio];

    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>🎉 ¡El amigo seleccionado es: <b>${amigoSeleccionado}</b>! 🎉</li>`;
}
