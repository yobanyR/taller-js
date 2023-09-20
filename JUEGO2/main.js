var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var intentos = 0;

function adivina() {
    var num = parseFloat(document.getElementById("numero").value);
    intentos++;

    if (num === numeroAleatorio) {
        alert("¡Número correcto! ¡Felicidades!");
        reiniciarJuego();
    } else if (num < numeroAleatorio) {
        alert("Más alto");
    } else if (num > numeroAleatorio) {
        alert("Más bajo");
    }

    document.getElementById("intentos").textContent = intentos;
}

function reiniciarJuego() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    document.getElementById("numero").value = "";
    document.getElementById("intentos").textContent = intentos;
}

