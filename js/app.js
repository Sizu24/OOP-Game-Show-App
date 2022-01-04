/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const button = document.querySelector("#btn__reset");
const keyboard = document.querySelector("#qwerty");
let game = null;
// Change background color to gradient
const background = document.querySelector(".main-container");
background.style.background = `linear-gradient(45deg, #d68f8f, #2198c4)`;

// Start Game
button.addEventListener("click", ()=>{
    game = new Game();
    game.startGame();
});

// If key is clicked, run handleInteraction and send clicked key as argument for method
keyboard.addEventListener("click", e =>{
    if(e.target.className === "key"){
        game.handleInteraction(e.target);
    }
});

/**
 * Event listener for physical keyboard key press 
 * Check if overlay message is not on screen
 * Loop through all keys in HTML to see if key letter matches key pressed
 * If match, check to see if pressed key already has "wrong" class to prevent losing heart on already selcted key
 * Run handleInteraction method with selected key as argument
 */
document.addEventListener("keyup", e =>{
    const letter = e.key;
    const overlay = document.querySelector("#overlay");

    if(overlay.style.display === "none"){
        const keys = document.querySelectorAll(".key");
        keys.forEach(key => {
            if(key.textContent === letter){
                if(key.className !== "key wrong"){
                    game.handleInteraction(key);
                }
            }
        })
    }
});




