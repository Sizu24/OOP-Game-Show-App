/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const button = document.querySelector("#btn__reset");
const keyboard = document.querySelector("#qwerty");
const game = new Game();

// Start Game

/**
 * Create instance of new game
 * Use button to start game
 */

button.addEventListener("click", ()=>{
    game.startGame();
});

keyboard.addEventListener("click", e =>{
    if(e.target.className === "key"){
        game.handleInteraction(e.target);
    }
});


