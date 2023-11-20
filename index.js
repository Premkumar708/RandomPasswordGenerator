const password_el = document.querySelector('#input-text');
const length_el = document.querySelector('#length');
const upperCase = document.querySelector('#caps');
const lowerCase = document.querySelector('#lowerCase');
const symbol = document.querySelector('#symbols');
const number = document.querySelector('#numbers')

const copy_api = document.querySelector("#copy");
const submit = document.querySelector("#submit")

submit.addEventListener('click',generatePassword)

const char_letters = "abcdefghijklmnopqrstuvwxyz";
const char_numbers = "1234567890";
const char_symbols ="!@#$%^&*()";

let password = "";
let length = length_el.value
let char = "";

function generatePassword() {
    char += upperCase.checked ? char_letters.toUpperCase(): "";
    char += lowerCase.checked ? char_letters.toLowerCase(): "";
    char += symbol.checked ? char_symbols: "";
    char += number.checked ? char_numbers: "";
    
    for(let i = 0 ; i < length; i++){
        let rand = Math.floor(Math.random() * length)
        password += char[rand]
    }
    password_el.value = password;
}   
