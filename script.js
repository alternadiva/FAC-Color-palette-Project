let palette = document.getElementById("palette");

function colorFields() {
    for (let i = 0; i < 4; i++) {
        let color = document.createElement("div");
        color.className = "colors";
        color.setAttribute("id", `color${[i+1]}`);
        let buttonChange = document.createElement("button");
        buttonChange.innerText = "Change";
        let buttonKeep = document.createElement("button");
        buttonKeep.innerText = "Keep";
        color.appendChild(buttonChange);
        color.appendChild(buttonKeep);
        palette.appendChild(color);
    }
}

let colors = document.getElementsByClassName("colors");

function addRandomColor() {
    for (let i = 0; i < colors.length; i++) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        colors[i].style.background = "#" + randomColor;
    }
}

function allWindowLoadFuncs() {
    colorFields();
    addRandomColor();
}

window.addEventListener('load', allWindowLoadFuncs);

/* let allButtons = document.getElementsByTagName("button");
let buts = Array.from(allButtons);

buts.forEach(x => x.addEventListener("click", addRandomColor)) */