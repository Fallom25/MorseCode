if(document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', ready);
}else{
	ready();
}


  function ready(){
  let encodeBtn = document.getElementById("encodeBtn");
  let decodeBtn = document.getElementById("decodeBtn");

  encodeBtn.addEventListener("click", encodeInputText);
  decodeBtn.addEventListener("click", decodeInputText);
  }

 const alphabet = {  
    "0":"-----",
    "1":".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    "a":".-",
    "b":"-...",
    "c":"-.-.",
    "d":"-..",
    "e":" .",
    "f":"..-.",
    "g":"--.",
    "h":"....",
    "i":"..",
    "j":".---",
    "k":"-.-",
    "l":".-..",
    "m":"--",
    "n":"-.",
    "o":"---",
    "p":".--.",
    "q":"--.-",
    "r":".-.",
    "s":"...",
    "t":"-",
    "u":"..-",
    "v":"...-",
    "w":".--",
    "x":"-..-",
    "y":"-.--",
    "z":"--..",
    " ":"/",
    "!":"-·-·--",
    ".":"·-·-·-",
    ",":"--··--"
  };
 const encodeInputText = () => {
    let encodeInput = document.getElementById("encodeInput").value.toLowerCase().split("");
    let alphabetKeys = Object.keys(alphabet);
    for(let i = 0; i <= encodeInput.length; i++){
        for (let j = 0; j < alphabetKeys.length; j++) {
            if ( encodeInput[i] === alphabetKeys[j]){
                console.log(encodeInput[i]);
                encodeInput[i] = alphabet[Object.keys(alphabet)[j]];
            }
        }
    }
    document.getElementById("encodeInput").value = encodeInput.join("  ");
  }

    const morse = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    " .": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "/": " ",
    "-·-·--": "!",
    "·-·-·-": ".",
    "--··--": ",",
  };
 const decodeInputText = (input) => {
    let decodeInput = document.getElementById("decodeInput").value.split("  ");
    let morseKeys = Object.keys(morse);
    for(let i = 0; i <= decodeInput.length; i++){
        for (let j = 0; j < morseKeys.length; j++) {
            if ( decodeInput[i] === morseKeys[j]){
                decodeInput[i] = morse[Object.keys(morse)[j]];
            }
        }
    }
    document.getElementById("decodeInput").value = decodeInput.join("");
  }
    

//   Morse Code Specifications:
//   - User should be able to input morse code string
//     - Get english back (after hitting and submit button)
//   - User should be able to input english string -X
//     - Get morse code back (after hitting submit button) - X
//   - Different delimeters for characters = + and words = / - X

