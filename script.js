let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");

function randomStartColor() {
    let randomColor1 = Math.floor(Math.random() * 16777215).toString(16); //Hexadecimal
    color1.style.backgroundColor = "#" + randomColor1;

    let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    color2.style.backgroundColor = "#" + randomColor2;

    let randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
    color3.style.backgroundColor = "#" + randomColor3;

    let randomColor4 = Math.floor(Math.random() * 16777215).toString(16);
    color4.style.backgroundColor = "#" + randomColor4;
}

window.addEventListener('load', randomStartColor);