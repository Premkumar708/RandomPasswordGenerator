const password = document.querySelector("#password")
const lengthInput = document.querySelector("#input-len")
const button = document.querySelector("#submit")
const checkbox = document.querySelector("#ToUpperCase")

const values = "abcdefghijklmnopqrstuvwxyz1234567890@#$%^&*"

button.addEventListener("click",()=>{
    const length = lengthInput.value;
    let string = ""
    for (let i = 0 ; i < length ; i++) {
        const random = Math.floor(Math.random() * values.length)
        string += values[random]
    } 
    if(checkbox.checked){
        password.innerHTML = string.toUpperCase()
    }else{
        password.innerHTML = string
    }    
});
