const password = document.querySelector("#password")
const length = 9;
const values = "abcdefghijklmnopqrstuvwxyz1234567890@#$%^&*"
let string = ""

for (let i = 0 ; i < length ; i++) {
    const random = Math.floor(Math.random() * values.length)
    string += values[random]
}
password.innerHTML = string