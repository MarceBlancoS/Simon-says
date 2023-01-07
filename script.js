const round = document.getElementById("round");
const simonButtons = document.getElementById("square");
const startButton = document.getElementById("startButton");

class Simon {
    constructor(simonButtons,startButton,round){
        this.round = 0;
        this.userPosition = 0; 
        this.totalRounds = 10;
        this.sequence = [];
        this.speed = 1000;
        this.blockedButtons = true;
        this.buttons = Array.from(simonButtons);
        this.display = {
            startButton,
            round
        }
this.errorSound = new Audio('./sound/error.wav');
this.buttonSounds = [
    new Audio('./sound/1.mp3'),
    new Audio('./sound/2.mp3'),
    new Audio('./sound/3.mp3'),
    new Audio('./sound/4.mp3'),


 ]

}


// Metodos para que funcione el juego
// Inicia el Simon
init() {

}
// Comienza el juego
startGame() {
}

// Actualiza la ronda y el tablero
updateRound(value) {
}

// Crea el array aleatorio de botones
createSequence() {
}

// Devuelve un número al azar entre 0 y 3
getRandomColor() {
}

// Ejecuta una función cuando se hace click en un botón
buttonClick(value) {
}

// Valida si el boton que toca el usuario corresponde a al valor de la secuencia
validateChosenColor(value) {
}

 // Verifica que no haya acabado el juego
 isGameOver() {
}

 // Muestra la secuencia de botones que va a tener que tocar el usuario
 showSequence() {
}

// Pinta los botones para cuando se está mostrando la secuencia
toggleButtonStyle(button) {
}

 // Actualiza el simon cuando el jugador pierde
 gameLost() {
}

// Muestra la animacón de triunfo y actualiza el simon cuando el jugador gana
gameWon() {
}




const simon = new Simon(simonButtons, startButton, round);
simon.init();