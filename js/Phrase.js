/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Loop through each letter in phrase
     * turn each letter into list item
     * return list items
     */
    addPhraseToDisplay(){
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
        for(let i = 0; i < this.phrase.length; i++){
            if(keyboardLetter.textContent === this.phrase[i]){
                return this.phrase[i];
            }
        }
        return false;
    }

    // check if letter picked matches any letter on board
        // on click loop through all letters and see if match with target letter
            // if match, return matched letter
            // if no match, show no match message


    showMatchedLetter(){
        let pickedLetter  = this.checkLetter();
        const boxes = document.querySelectorAll(".letter");
        for(box of boxes){
            if(box.textContent === pickedLetter){
                box.classList.add("show");
            }
        }
    }
}