let arr = ["🍗", "🍆", "🍎", "🍟", "🥝", "🥑", "🥗", "🥥"];

let mainArr = [...arr, ...arr];

mainArr.sort(() => 0.5 - Math.random());
console.log(mainArr);

let main = document.querySelector("main");
let container = document.querySelector(".container");

let ct = document.querySelector(".ct");

let checkArr = [];
let score = 0;

mainArr.forEach((elem) => {
  let card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML += `
          <div class="cc">
            <div class="ct"></div>
            <div class="cb">${elem}</div>
          </div>
`;

  card.addEventListener("click", (e) => {
    handleCardFlip(card, elem, e);
  });
  container.appendChild(card);
});

let handleCardFlip = (card, elem, e) => {
  console.log(checkArr);
  if (checkArr.length < 2) {
    e.target.classList.add("flipped");
    setTimeout(() => {
      if (checkArr.length === 2) {
        let [firstVal, secondVal] = checkArr;

        if (firstVal.value === secondVal.value) {
          score += 2;
          firstVal.card.style.visibility = "hidden";
          secondVal.card.style.visibility = "hidden";
          document.querySelector("h1 b").textContent = score;
        }

        checkArr = [];
        if (mainArr.length === score) {
          alert("game over");
        }
      }
    }, 1500);
  } else {
    return;
  }

  checkArr.push({ card, value: elem });
  console.log(checkArr);

  setTimeout(() => {
    e.target.classList.remove("flipped");
    checkArr = [];
  }, 1500);
};
