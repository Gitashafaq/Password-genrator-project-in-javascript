let button =document.querySelector("button");
let input =document.querySelector("input");
let copyBtn =document.querySelector("i");

let allChar = 'ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%6&*90_)(+=-';
let pwLength = 8;


button.addEventListener("click",function(){
    let password = '';
    for(let i=0; i<pwLength; i++){
        password += allChar[Math.floor(Math.random()*allChar.length)];
    }

    input.value = password;
});


copyBtn.addEventListener("click",function(){
    input.select();
    document.execCommand("copy");
});