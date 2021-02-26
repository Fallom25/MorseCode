import {alphabet, morse} from './morsecode.js'


//user can enter delim

const encodeInputText = () => {

    let encodeInput = document.getElementById("encodeInput").value.toLowerCase().split("");
    document.getElementById("encodeInput").value = letterKeys(encodeInput, alphabet).join("  ");
}
  
const decodeInputText = () => {

    let decodeInput = document.getElementById("decodeInput").value.split("  ");
    document.getElementById("decodeInput").value = letterKeys(decodeInput, morse).join("");
}


// This function takes in an array of letters and an object
// Turns the object it into an array of object keys
// Goes through every letter in the array of letters
// Compares each letter to every key in the array of object keys
// If matched the letter becomes the matching key's value
// Returns new array of letters
const letterKeys = (arrOfLetters, object) => {
    let objectKeys = Object.keys(object);
    
    for(let i = 0; i <= arrOfLetters.length; i++){

        for (let j = 0; j < objectKeys.length; j++) {

            if ( arrOfLetters[i] ===objectKeys[j]){
                arrOfLetters[i] = object[Object.keys(object)[j]];
            }else{
                alert("Please only enter valid characters");
                return [];
            }
        }
    }
    return arrOfLetters;
}

 
const ready = () => {
    let encodeBtn = document.getElementById("encodeBtn");
    let decodeBtn = document.getElementById("decodeBtn");

    encodeBtn.addEventListener("click", encodeInputText);
    decodeBtn.addEventListener("click", decodeInputText);
    }

if(document.readyState == 'loading'){   
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}