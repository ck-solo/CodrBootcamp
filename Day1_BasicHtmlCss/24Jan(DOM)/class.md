DOM

selection

alert
document.querySelector
document.querySelectorAll
document.getElementById
document.getElementsByClassName
document.getElementsByTagName

Event Bubbling
whenever we triger any children element it goees from children to parent and then to grand parent and so on

Event Capturing
capturing is used to go from parent to children capture default is false

set timeout 
clear timeout

set interval
clear interval
******************************************



// Dom

// selection

// alert("Hello");
// let inp = Number(prompt("enter your age"));
// console.log(inp);

// let container = document.querySelector(".container");
// let button = document.querySelector("button");
// let point = document.querySelector(".point");
// console.log(point);

// let flag = false;
// button.addEventListener("click", () => {
//   if (flag) {
//     flag = false;
//     bulb.style.backgroundColor = "black";
//     button.textContent = "On";
//   } else {
//     flag = true;
//     bulb.style.backgroundColor = "yellow";
//     button.textContent = "Off";
//   }
// });

// let container = document.querySelector(".container");
// let button = document.querySelector("button");
// let point = document.querySelector(".point");
// let time = document.querySelector(".time b");
// let score = document.querySelector(".score b");
// let gos = document.querySelector(".gos b");
// let start = document.querySelector(".start");

// let over = document.querySelector(".over");
// let audio = document.querySelector("audio");

// let tame = 0;
// let sco = 0;

// let rn = () => {
//   return Math.floor(Math.random() * 100);
// };

// let rc = () => {
//   return Math.floor(Math.random() * 256);
// };

// let gameOver = () => {
//   over.style.display = "block";
//   point.style.display = "none";
//   gos.textContent = sco;
//   audio.pause();
//   audio.currentTime = 0;
// };

// let reset = () => {
//   over.style.display = "none";
//   tame = 0;
//   sco = 0;
//   time.textContent = 0;
//   score.textContent = 0;
//   button.style.opacity = 1;
//   button.disabled = false;
//   start.style.display = "block";
// };

// button.addEventListener("click", () => {
//   audio.play();
//   button.disabled = true;
//   button.style.opacity = 0.5;
//   start.style.display = "none";
//   let interval = setInterval(() => {
//     let topVal = rn();
//     let leftVal = rn();

//     point.style.display = "block";
//     point.style.top = topVal > 30 ? `calc(${topVal}% - 30px)` : `${topVal}%`;
//     point.style.left =
//       leftVal > 30 ? `calc(${leftVal}% - 30px)` : `${leftVal}%`;

//     point.style.backgroundColor = `rgb(${rc()}, ${rc()}, ${rc()})`;
//     tame++;
//     time.textContent = tame;
//   }, 1000);

//   setTimeout(() => {
//     clearInterval(interval);
//     gameOver();
//     setTimeout(() => {
//       reset();
//     }, 3000);
//   }, 5000);
// });

// point.addEventListener("click", () => {
//   sco++;
//   score.textContent = sco;
// });

let main = document.querySelector("main");
let img = document.querySelector("img");

let div = document.createElement("div");

img.setAttribute("height", "200px");
img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1761839258239-2be2146f1605?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);

let h = img.getAttribute("src");
console.log(h);

main.appendChild(div);