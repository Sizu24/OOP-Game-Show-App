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
        // const phrase = new Phrase(randomPhrase);
        this.activePhrase = randomPhrase;
        
        // Add random phrase to method to prepare for display
        randomPhrase.addPhraseToDisplay();
    }

    removeLife(){

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


        console.log("hi");

        const isMatchedLetter = this.activePhrase.checkLetter(keyletter);
        
        if(isMatchedLetter === false){
            keyletter.classList.add("wrong");
            this.removeLife();
            
        }else{
            keyletter.classList.add("chosen");
            this.activePhrase.showMatchedLetter(isMatchedLetter);

        }
    }
}
