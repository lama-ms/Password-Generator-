const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z", // 26 0-25
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z", //26 26-51
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", //10 52- 61
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=", // 16 62- 77
    "{","[","}","]",",","|",":",";","<",">",".","?","/"]; // 13 78-90

const lettersArray = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z", 
    "a","b","c","d","e","f","g","h","i","j","k","l","m", "n","o","p","q",
    "r","s","t","u","v","w","x","y","z"];
const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolsArray = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","="];

let button = document.getElementById("button")

let symbols = document.getElementById("symbols")
let numbers= document.getElementById("numbers")

let toggleButton = document.querySelector(".toggle-button")


let pass1 = document.getElementById("passwordBox1");
let pass2 = document.getElementById("passwordBox2");

let passwordText1 = document.getElementById("passwordText1")
let passwordText2 = document.getElementById("passwordText2")

let image1 = document.querySelector("#passwordBox1 .image");
let image2 = document.querySelector("#passwordBox2 .image");

let passwordLength = document.getElementById("passwordLength");
let lengthError = document.getElementById("lengthError")

console.log(passwordLength)

function copyPassword(passwords, image){

     if (passwords.textContent === "") {
        return;
    }

    navigator.clipboard.writeText(passwords.textContent);
    image.src = "copied.png";

}


function changeButton() {
    document.body.classList.toggle("light-mode")
    if (document.body.classList.contains("light-mode")) {
        document.getElementById("modeButton").textContent = "🌙"
    } else {
        document.getElementById("modeButton").textContent = "☀️"
    }
}

function toggleChecked() {
if (symbols.checked || numbers.checked) {
    toggleButton
} else {
    toggleButton
}
}

 

function generatePass() {

    let password1 = ""
    let password2 = ""

    let length = Number(passwordLength.value)
    

    if ( length < 4 || length > 22) {
        lengthError.textContent = "Out of range!"
        return
    }
    lengthError.textContent = ""

    image1.src = "copy.png";
    image2.src = "copy.png";

    for ( let i = 0; i < passwordLength.value ; i++  ){

    let allowedcharacters

    if(symbols.checked === false && numbers.checked === false){
        allowedcharacters = lettersArray
    }
    else if ( symbols.checked && numbers.checked){
        allowedcharacters = lettersArray.concat(symbolsArray ,numbersArray)
    }
    else if(symbols.checked) {
      allowedcharacters =  lettersArray.concat(symbolsArray)
    } 
    else if (numbers.checked) {
      allowedcharacters = lettersArray.concat(numbersArray)
    } 

    let randomIndex1 = Math.floor(Math.random() * allowedcharacters.length)
    let randomIndex2 = Math.floor(Math.random() * allowedcharacters.length)


    password1 += allowedcharacters[randomIndex1]
    password2 += allowedcharacters[randomIndex2]
    }

    console.log(password1)
    passwordText1.textContent = password1;

    console.log(password2)
    passwordText2.textContent = password2;
}
