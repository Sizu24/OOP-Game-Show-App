/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const button = document.querySelector("#btn__reset");

// Start Game

/**
 * Create instance of new game
 * Use button to start game
 */

button.addEventListener("click", ()=>{
    const game = new Game();
    game.startGame();
});

