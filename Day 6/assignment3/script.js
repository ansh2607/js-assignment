const name = prompt("Enter your name:","Anonymous");
const title = document.getElementById('title');
title.innerText = ` Heyy ${name}, welcome to the website!!!`;

const clkTime = document.getElementById('clock');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    clkTime.innerText = time;
}
clock();
setInterval(clock,1000);

const darkMode = document.getElementById('background');
darkMode.onclick = function changeColor(){
    darkMode.classList.toggle('dark');
}
