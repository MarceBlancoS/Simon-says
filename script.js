const round = document.getElementById('round');
const simonButtons = document.getElementsByClassName('square');
const startButton = document.getElementById('startButton');

class Simon {
    constructor(simonButtons, startButton, round) {
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
        this.errorSound = new Audio('./sounds/error.wav');
        this.buttonSounds = [
            new Audio('./sounds/1.mp3'),
            new Audio('./sounds/2.mp3'),
            new Audio('./sounds/3.mp3'),
            new Audio('./sounds/4.mp3'),
        ]
    }

    // Inicia el Simon
    init() {
        this.display.startButton.onclick = () => this.startGame();
    }

    // Comienza el juego
    startGame() {
        this.display.startButton.disabled = true; 
        this.updateRound(0);
        this.userPosition = 0;
        this.sequence = this.createSequence();
        this.buttons.forEach((element, i) => {
            element.classList.remove('winner');
            element.onclick = () => this.buttonClick(i);
        });
        this.showSequence();
    }

    // Actualiza la ronda y el tablero
    updateRound(value) {
        this.round = value;
        this.display.round.textContent = `Round ${this.round}`;
    }

// Crea el array aleatorio de botones
createSequence() {
    return Array.from({length: this.totalRounds}, () =>  this.getRandomColor());
}

// Devuelve un número al azar entre 0 y 3
getRandomColor() {
    return Math.floor(Math.random() * 4);
}

// Ejecuta una función cuando se hace click en un botón
buttonClick(value) {
    !this.blockedButtons && this.validateChosenColor(value);
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