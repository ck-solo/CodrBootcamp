// let arr = [ "helo","sad", "angry" ]

// let main = document.querySelector("main");

// arr.forEach((elem) =>{
//     main.innerHTML += `<div class="card">${elem}</div>`
// })


let main = document.querySelector("main");
let container = document.querySelector(".container");
let cards = document.querySelector(".cards");
let layer = document.querySelector(".layer");
let ctop = document.querySelector(".ctop");
let cbottom = document.querySelector(".cbottom");

layer.addEventListener("click",(e)=>{ 
    ctop.style.visibility = "hidden";
     
})


