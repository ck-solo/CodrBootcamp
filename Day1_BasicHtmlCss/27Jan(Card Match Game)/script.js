let main = document.querySelector("main");
let container = document.querySelector(".container");
let card = document.querySelector(".card");
let ctop = document.querySelector(".ctop");
let cbottom = document.querySelector(".cbottom");

let arr = ["🐮", "🐰", "🐼", "🐻‍❄️", "🐧", "🦄", "🐷", "🐺"];
let mainArr = [...arr, ...arr];

let store = [];

let score = 0;

mainArr.sort(() => 0.5 - Math.random());
console.log(mainArr);

mainArr.forEach((elem) => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML += `<div class="cc">
                    <div class="ctop"></div>
                    <div class="cbottom">${elem}</div>
                   </div>`;
});


 
