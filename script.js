let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");

let  button1 = document.getElementById("button1");
let  button2 = document.getElementById("button2");
let  button3 = document.getElementById("button3");
let  button4 = document.getElementById("button4");

function randomStartColor1() {
    let randomColor1 = Math.floor(Math.random() * 16777215).toString(16); //Hexadecimal
    color1.style.backgroundColor = "#" + randomColor1;
}

function randomStartColor2() {
    let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    color2.style.backgroundColor = "#" + randomColor2;
}

function randomStartColor3() {
    let randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
    color3.style.backgroundColor = "#" + randomColor3;
}

function randomStartColor4() {
    let randomColor4 = Math.floor(Math.random() * 16777215).toString(16);
    color4.style.backgroundColor = "#" + randomColor4;
}

window.addEventListener('load', randomStartColor1);
window.addEventListener('load', randomStartColor2);
window.addEventListener('load', randomStartColor3);
window.addEventListener('load', randomStartColor4);

button1.addEventListener('click', randomStartColor1);
button2.addEventListener('click', randomStartColor2);
button3.addEventListener('click', randomStartColor3);
button4.addEventListener('click', randomStartColor4);
