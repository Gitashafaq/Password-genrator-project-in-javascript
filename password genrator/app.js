let button =document.querySelector("button");
let input =document.querySelector("input");
let copyBtn =document.querySelector("i");



let passwordLength = 8;

let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase ='abcdefghijklmnopqrstuvwxyz';
let numbers = '1234567890';
let symbols = '!@#$%^&*()_+~`';
let allChar = upperCase + lowerCase + numbers + symbols;


function pwGenerator(){
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while(passwordLength > password.length)
    {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    

    input.value = password
}

button.addEventListener("click",pwGenerator);



copyBtn.addEventListener("click",function(){
    input.select();
    document.execCommand("copy");
});