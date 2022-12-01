const socket = io();
let toggle = document.querySelector(".toggle")
let text = document.querySelector(".text")
let back = document.querySelector(".globalBody")
function AnimatedToggle(){
    toggle.classList.toggle("active")
    if(toggle.classList.contains("active")){
        text.innerHTML = "ON"
        back.style.backgroundColor = "#eedd82"
        socket.emit('data', 'allumer');
    }
    else
    {
        text.innerHTML = "OFF"
        back.style.backgroundColor = "#efefef"
        socket.emit('data', 'eteindre');
    }
}