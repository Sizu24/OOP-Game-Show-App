/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        /**
         * Loop through each letter in phrase
         * turn each letter into list item
         * return list items
         **/
        let list = "";
        const listUl = document.getElementById("phrase").firstElementChild;
        for(let letter of this.phrase){
            if(letter === " "){
                list += '<li class="space"> </li>';
            }else{
                list += `<li class="hide letter">${letter}</li>`;
            }
        }
        listUl.innerHTML = list;
        console.log(this.phrase);
        return list;
    }

    checkLetter(keyboardLetter){
        // keyboardLetter is from keyboard event listener in app.js

        /**
         * Loop through phrase letters to see if picked letter matches any letters in phrase
         * If match, return the letter from phrase
         * If no match, return false
         **/
        for(let i = 0; i < this.phrase.length; i++){
            if(keyboardLetter.textContent === this.phrase[i]){
                return this.phrase[i];
            }
        }
        return false;
    }

    showMatchedLetter(pickedLetter){
        // picked letter is from isMatchedLetter inside the handleInteraction method in Game.js

        /**
         * Loop through all letters to find with ones match picked letter
         * If match, add class "show" to letter
         **/
        const boxes = document.querySelectorAll(".letter");
        for(let box of boxes){
            if(box.textContent === pickedLetter){
                box.classList.add("show");
            }
        }
    }
}