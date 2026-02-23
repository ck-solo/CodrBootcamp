const holes = document.querySelectorAll(".hole");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const startBtn = document.getElementById("start");

const registerBtn = document.getElementById("registerBtn");
const nameInput = document.getElementById("playerName");

const scoreList = document.getElementById("scoreList");
const resetBtn = document.getElementById("resetScores");

const registerBox = document.getElementById("register");
const gameBox = document.querySelector(".game-area");

// Game variable

let score = 0;
let time = 15;
let playerName = "";

let activeHole = null;

let gameTimer;
let moleTimer;
let hideMoleTimer;

let scores = [];

// Register player

registerBtn.onclick = function () {
  if (nameInput.value === "") {
    alert("Please enter your name!");
    return;
  }

  playerName = nameInput.value;
  startBtn.disabled = false;

  registerBox.classList.add("hidden");
  gameBox.classList.remove("hidden");
};

// Pick random hole
function getRandomHole() {
  let randomNumber = Math.floor(Math.random() * holes.length);
  return holes[randomNumber];
}

// Show mole
function showMole() {
  if (activeHole) {
    activeHole.innerHTML = "";
  }

  let hole = getRandomHole();
  let mole = document.createElement("div");
  mole.classList.add("mole");

  mole.onclick = hitMole;

  hole.appendChild(mole);
  activeHole = hole;

  // Hide mole after 1 second
  hideMoleTimer = setTimeout(function () {
    if (activeHole === hole) {
      hole.innerHTML = "";
      activeHole = null;
    }
  }, 1000);
}

// When mole clicked
function hitMole() {
  score++;
  scoreText.innerText = score;

  if (activeHole) {
    activeHole.innerHTML = "";
  }

  clearTimeout(hideMoleTimer);
}

// start game

startBtn.onclick = function () {
  score = 0;
  time = 15;

  scoreText.innerText = score;
  timeText.innerText = time;

  // Time
  gameTimer = setInterval(function () {
    time--;
    timeText.innerText = time;

    if (time === 0) {
      endGame();
    }
  }, 1000);

  showMole();
  moleTimer = setInterval(showMole, 800);
};

// End Game

function endGame() {
  clearInterval(gameTimer);
  clearInterval(moleTimer);
  clearTimeout(hideMoleTimer);

  if (activeHole) {
    activeHole.innerHTML = "";
  }

  alert("Time's up! " + playerName + "'s score: " + score);

  saveScore(playerName, score);

  // Reset
  playerName = "";
  nameInput.value = "";
  startBtn.disabled = true;

  registerBox.classList.remove("hidden");
  gameBox.classList.add("hidden");
}

// Score

function saveScore(name, score) {
  scores.unshift({ name: name, score: score });

  if (scores.length > 10) {
    scores.pop();
  }

  showScores();
}

function showScores() {
  scoreList.innerHTML = "";

  for (let i = 0; i < scores.length; i++) {
    let li = document.createElement("li");
    li.innerText = i + 1 + ". " + scores[i].name + " - " + scores[i].score;
    scoreList.appendChild(li);
  }
}

// Reset score

resetBtn.onclick = function () {
  scores = [];
  showScores();
};
