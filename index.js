let userScore = 0;
let cpuScore = 0;
const Actual = { 1: "rock", 2: "paper", 3: "scissors" };
const Beats = { 1: "paper", 2: "scissors", 3: "rock" };

main();

function main() {
  const imgs = Array.from(document.querySelectorAll(".choices img"));

  imgs.forEach((img) =>
    img.addEventListener("click", function () {
      vsCpu(img.id);
    })
  );
}

function vsCpu(userChoice) {
  const cpuChoice = Math.ceil(Math.random() * 3);

  let cls, message;

  if (Beats[cpuChoice] === userChoice) {
    userScore++;
    cls = "won";
    message = "Hmm... A worthy opponent.";
  } else if (Actual[cpuChoice] === userChoice) {
    cls = "draw";
    message = "NO! It's a draw!";
  } else {
    cpuScore++;
    cls = "lost";
    message = "You weren't that good anyway...";
  }
  const center = document.querySelector(".center");
  const banner = document.querySelector(".banner");
  const choices = document.getElementById("choices");

  center.classList.toggle(cls);
  banner.innerHTML = message;
  choices.style.pointerEvents = "none";

  setTimeout(() => {
    center.classList.toggle(cls);
    banner.innerHTML = "Choose wisely...";
    choices.style.pointerEvents = "all";
  }, 1500);

  updateScores();
}

function updateScores() {
  const user = document.getElementById("user-score");
  user.innerHTML = userScore;
  const cpu = document.getElementById("cpu-score");
  cpu.innerHTML = cpuScore;
}
