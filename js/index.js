import { alphabet, morse } from './morsecode.js';

//user can enter delim

const letterCheck = (arrOfLetters, codeObject) => {
    if (arrOfLetters.length === 0) {
        return false;
    }

    return arrOfLetters.every((letter) => codeObject.hasOwnProperty(letter));
}

const translate = (codeString, codeObject, splitDelim, joinDelim) => {
    if (typeof codeString !== 'string' || typeof codeObject !== 'object') {
        return [];
    }

    const arrOfLetters = codeString.toLowerCase().split(splitDelim);
    if (letterCheck(arrOfLetters, codeObject) === false) {
        alert('Please Enter Valid Characters');
        return [];
    }

    return arrOfLetters.map((key) => codeObject[key]).join(joinDelim);
}

const encodeInputText = () => {
    const encodeInput = document.getElementById("encodeInput");
    encodeInput.value = translate(encodeInput.value, alphabet, "", "   ");
}

const decodeInputText = () => {
    const decodeInput = document.getElementById("decodeInput");
    decodeInput.value = translate(decodeInput.value, morse, "   ", "");
}

const encodeBtn = document.getElementById("encodeBtn");
const decodeBtn = document.getElementById("decodeBtn");

encodeBtn.addEventListener("click", encodeInputText);
decodeBtn.addEventListener("click", decodeInputText);

export {
    letterCheck,
    translate
};
