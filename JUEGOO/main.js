const opciones = ["piedra", "papel", "tijeras" ];

function elecPrograma(){
    const indice = Math.floor(Math.random()*3);
    return opciones[indice];
}
function ganador(){
    var eleH= document.getElementById("sel").value;
    var eleP = elecPrograma();

    if (eleH === "papel" && eleP === "piedra") {
        alert("¡El ganador es el usuario!");
    } else if (eleH === "tijeras" && eleP === "papel") {
        alert("¡El ganador es el usuario!");
    } else if (eleH === "piedra" && eleP === "tijeras") {
        alert("¡El ganador es el usuario!");
    } else if (eleH === eleP) {
        alert("¡Empate! Ambos eligieron " + eleH);
    } else {
        alert("¡El ganador es el programa!");
    }

}