/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [new Phrase("Candy Cane"), new Phrase("Ice Cream Cake"), new Phrase("Marvel Comics"), new Phrase("Playstation 5","Super Saiyan")];
        this.activePhrase = null;
    }

    getRandomPhrase(){
        const randomNumber = Math.floor(Math.random() * (this.phrases.length - 1));
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
    }

    gameOver(winLoss){
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
    }

    removeLife(){
        // Add count to missed in constructor
        this.missed++;

        // if all hearts are gone, run gameOver method
        if(this.missed === 5){
            const win = false;
            this.gameOver(win);
        }

        // assign number of missed, then push all heart icons to hearts array
        let count = this.missed;
        const hearts = [];
        hearts.push(document.querySelectorAll(".tries img"));

        // Change heart icon from blue to gray by using index of heart using missed count minus 1
        hearts[0][this.missed - 1].src = "images/lostHeart.png";
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
    }
}
