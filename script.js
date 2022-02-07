let palette = document.getElementById("palette");

window.addEventListener('load', allWindowLoadFuncs);

function colorFields() {
    for (let i = 0; i < 4; i++) {
        let color = document.createElement("div");
        color.className = "colors";
        color.setAttribute("id", `color${[i+1]}`);
        palette.appendChild(color);
        let buttonChange = document.createElement("button");
        buttonChange.innerText = "Change";
        buttonChange.className = "change-btn";
        let buttonKeep = document.createElement("button");
        buttonKeep.innerText = "Keep";
        color.appendChild(buttonChange);
        color.appendChild(buttonKeep);
    }
}

let colors = document.getElementsByClassName("colors");

function addRandomColor() {
    for (let i = 0; i < colors.length; i++) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        colors[i].style.background = "#" + randomColor;
    }
}

let changeButtons = document.getElementsByClassName("change-btn");

function buttonClrChange() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.parentElement.style.background = "#" + randomColor;
}

function allWindowLoadFuncs() {
    colorFields();
    addRandomColor();
    Array.from(changeButtons).forEach(button => button.addEventListener("click", buttonClrChange));
}





