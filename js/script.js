const elements = document.querySelectorAll(".fade");

function showElements(){

elements.forEach(el => {

const position = el.getBoundingClientRect().top;
const screen = window.innerHeight;

if(position < screen - 100){

el.classList.add("show");

}

});

}

window.addEventListener("scroll", showElements);

showElements();