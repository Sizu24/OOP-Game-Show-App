/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = ["Candy Cane", "Ice Cream Cake", "Marvel Comics", "Playstation 5","Super Saiyan"];
        this.activePhrase = null;
    }

    getRandomPhrase(){
        const randomNumber = Math.floor(Math.random() * 4);
        return this.phrases[randomNumber];
    }

    startGame(){
        const phraseGame = new Game();

        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        
        let randomPhrase = this.getRandomPhrase();
        const phrase = new Phrase(randomPhrase);
        phrase.addPhraseToDisplay();
    }

    handleInteraction(){

        // check if button clicked matches letter in phrase
        // if returns false, loop through keys and if matches target then add "wrong" class to matched letter

        let letterMatch = checkLetter();

        if(letterMatch === false){
            const keys = document.querySelectorAll(".key");
            for(key of keys){
                if(e.target.value === key.value){
                    key.classList.add("wrong");
                    removeLife();
                }
            }
        }else{
            for(key of keys){
                if(e.target.value === key.value){
                    console.log("hi");
                }
            }
        }
    }
}

