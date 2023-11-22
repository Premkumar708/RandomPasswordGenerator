const password_el = document.querySelector('#input-text');
const length_el = document.querySelector('#length');
const upperCase = document.querySelector('#caps');
const lowerCase = document.querySelector('#lowerCase');
const symbol = document.querySelector('#symbols');
const number = document.querySelector('#numbers')

const copy_api = document.querySelector("#copy");
const submit = document.querySelector("#submit")
copy_api.addEventListener('click',copy)

submit.addEventListener('click',generatePassword)
const char_letters = "abcdefghijklmnopqrstuvwxyz";
const char_numbers = "1234567890";
const char_symbols ="!@#$%^&*()";

let length = length_el.value

function generatePassword() {
    let char = "";
    let password = "";
   if(upperCase.checked) char += char_letters.toUpperCase();
   if(lowerCase.checked) char += char_letters;
   if(number.checked) char += char_numbers;
   if(symbol.checked) char += char_symbols
    
    for(let i = 0 ; i < length; i++){
        let rand = Math.floor(Math.random() * char.length)
        password += char[rand]
    }
    password_el.value = password;
    if(password_el.value="undefined"){
        password_el.value = ''
    }
}   

async function copy () {
    if(navigator.clipboard){
        await navigator.clipboard.writeText(password_el.value);
        alert('copied')
    }
}