let button = document.querySelector(".button");
let header = document.querySelector(".header");
button.addEventListener('click', changeColor);

function changeColor() {
    header.style.color = "blue";
}