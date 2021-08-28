var colors = [
    ["pink", "#FC86AA"],
    ["blue", "#107AB0"],
    ["yellow", "FCC006"],
    ["green", "#33B864"],
    ["red", "#F4320C"],
    ["orange", "#FF7052"],
    ["purple", "#A442A0"],
    ["black", "#070D0D"],
];
var currentColor;
var interval;
let startButton = document.getElementById("start-button");

function startGame() {
    if (interval) {
        clearInterval(interval);
    }
    startButton.classList.toggle("dark");
    startButton.value = "Match me!";
    let colorBox = document.getElementById("color-box");
    let position;
    let numColors = colors.length;
    interval = setInterval(function () {
        position = Math.floor(Math.random() * Math.floor(numColors));
        currentColor = colors[position];
        colorBox.style.backgroundColor = currentColor[1];
    }, 300);
}

function checkForMatch() {
    if (currentColor[0] === "pink") {
        clearInterval(interval);
        startButton.classList.toggle("dark");
        startButton.value = "Play again!";
    }
}
