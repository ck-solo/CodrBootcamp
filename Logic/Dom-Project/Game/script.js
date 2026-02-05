const bird = document.getElementById("birds")
const game = document.getElementById("game")

let topHeight = 200;
let gravity = 2;


setInterval(() => {
    topHeight += gravity;
    bird.style.top = topHeight + "px"

}, 20);

document.addEventListener("keydown",(e)=>{
    topHeight = topHeight - 60;
       bird.style.top = topHeight + "px"
})

function creatpipe(){
    pipetop.class
}