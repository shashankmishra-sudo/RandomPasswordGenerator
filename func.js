//Variables
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const special = "!@#$%^&*";

//Selectors

let showPass = document.querySelector("#pass-box");
let lengthOfPass = document.querySelector("#pass-lenth");
let capitalLetter = document.querySelector("#Capital-letters");
let smallLetter = document.querySelector("#Small-letters");
let specialChar = document.querySelector("#Special-character");
let numb = document.querySelector("#Numbers");
let generate = document.querySelector("#submit");


const getrandom = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]

}

const generatePassword = (password = "") => {



    if (capitalLetter.checked) {
        password = password + getrandom(capital)

    }

    if (smallLetter.checked) {
        password = password + getrandom(small)

    }

    if (specialChar.checked) {
        password = password + getrandom(special)

    }

    if (numb.checked) {
        password = password + getrandom(num)

    }

    if (password.length < lengthOfPass.value) {
        return generatePassword(password);
    }
    else {
        showPass.innerHTML = truncate(password, lengthOfPass.value);
    }

    function truncate(str, len) {
       
        if (str.length > len) {
            let substr = str.substring(0, len);
            console.log(substr);
            return substr;
        }
        else {
            return str;
        }
    }



}



