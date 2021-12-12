/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const displayPhrase = new Phrase("HELLO WORLD");

console.log(displayPhrase.addPhraseToDisplay());

const button = document.querySelector("#btn__reset");

// Start Game

/**
 * Create instance of new game
 * Use button to start game
 */
const game = new Game();

button.addEventListener("click", ()=>{
    game.startGame();
});

