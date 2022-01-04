/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Game class with missed guess count, phrases that will be used, and active phrase 
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [new Phrase("Candy Cane"), new Phrase("Ice Cream Cake"), new Phrase("Marvel Comics"), new Phrase("Playstation Game"), new Phrase("Super Saiyan")];
        this.activePhrase = null;
    }

    // Generate random phrase using number of phrases
    getRandomPhrase(){
        const randomNumber = Math.floor(Math.random() * (this.phrases.length));
        return this.phrases[randomNumber];
    }

    startGame(){
        
        // Hide overlay to reveal game
        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";

        // Get random phrase from phrase class, and set it to activePhrase
        const randomPhrase = this.getRandomPhrase();
        this.activePhrase = randomPhrase;
        
        // Add random phrase to method to prepare for display
        randomPhrase.addPhraseToDisplay();

        // Remove "chosen" and "wrong" classes from keyboard keys
        const keys = document.querySelectorAll(".key");

        keys.forEach(key => key.classList.remove("chosen"));
        keys.forEach(key => key.classList.remove("wrong"));
        keys.forEach(key => key.disabled = false);
    }

    gameOver(winLoss){

        /**
         * If win, show you win message by showing overlay, but replacing start message with win message
         * If lose, show you lose message by showing overlay, but replacing start message with lose message
         */
        const gameOverMessage = document.querySelector("#game-over-message");
        const overlay = document.querySelector("#overlay");

        if(winLoss === true){
            overlay.style.display = "block";
            gameOverMessage.textContent = "You Win!";
            overlay.classList.remove("start");
            overlay.classList.add("win");
        }else{
            overlay.style.display = "block";
            gameOverMessage.textContent = "You Lose!";
            overlay.classList.remove("start");
            overlay.classList.add("lose");
        }

        // Select phrase and remove to prepare for next game's phrase
        const listOl = document.getElementById("phrase").firstElementChild;
        listOl.innerHTML = "";

        /**
         * Select hearts list by selecting ol from scoreboard id
         * Loop 5 times for 5 hearts to add to scoreHearts variable
         * Add scoreHearts list inside ol
         * Set missed guesses back to 0
         */
        const scoreboard = document.querySelector("#scoreboard").firstElementChild;
        let scoreHearts = "";

        for(let i = 0; i < 5; i++){
            scoreHearts += `<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>`;
        }
        scoreboard.innerHTML = scoreHearts;

        // Set missed constructor back to 0
        this.missed = 0;
    }

    removeLife(){
        // assign number of missed, then push all heart icons to hearts array
        const hearts = [];
        hearts.push(document.querySelectorAll(".tries img"));

        // Change heart icon from blue to gray by using index of heart using missed count minus 1
        hearts[0][this.missed].src = "images/lostHeart.png";

        // Add count to missed in constructor
        this.missed++;

        // if all hearts are gone, run gameOver method
        if(this.missed === 5){
            const win = false;
            this.gameOver(win);
        }
    }

    checkForWin(){
        const matchedLetters = document.querySelectorAll(".show");
        const letters = document.querySelectorAll(".letter");

        if(matchedLetters.length === letters.length){
            return true;
        }else{
            return false;
        }
    }

    handleInteraction(keyletter){

        // check if button clicked matches letter in phrase
        // if returns false, loop through keys and if matches target then add "wrong" class to matched letter

        /** 
         *  disable letter onscreen keyboard button
         * 
         *  if phrase doesnt include selected letter, add "wrong" CSS class to selected letter's keyboard button
         *  call removeLife method
         * 
         *  if phrase includes letter, add "chosen" CSS class to selected letter's keyboard button
         *  call showMatchedLetter method
         *  call checkForWin method
         * 
         * if player has won the game, call gameOver method
         * 
         * 
         * */

        const isMatchedLetter = this.activePhrase.checkLetter(keyletter);
        
        if(isMatchedLetter === false){
            keyletter.classList.add("wrong");
            this.removeLife();
        }else{
            keyletter.classList.add("chosen");
            this.activePhrase.showMatchedLetter(isMatchedLetter);
            const win = this.checkForWin();
            if(win){
                this.gameOver(win); 
            }
        }
        keyletter.disabled = true;
    }
}