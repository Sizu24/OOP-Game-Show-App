/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrase = ["phrase one", "phrase one", "phrase one", "phrase one","phrase one"];
        this.activePhrase = null;
    }

    getRandomPhrase(){
        const randomNumber = Math.floor(Math.random() * 4);
        return this.phrase[randomNumber];
    }

    startGame(){
        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        console.log("started game");
        this.getRandomPhrase();
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

