const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId;
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");
  hitPosition = randomPosition.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (hitPosition === square.id) {
      result++;
      score.textContent = `${result}`;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 500);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("game is over and your score is " + result);
  }
}
let countDownTimerId = setInterval(countDown, 1000);
