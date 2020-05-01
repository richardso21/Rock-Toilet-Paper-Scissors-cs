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

  updateInterface(userChoice, Actual[cpuChoice], cls, message);
}

function updateInterface(userChoice, cpuChoice, cls, message) {
  const center = document.querySelector(".center");
  const banner = document.querySelector(".banner");
  const choices = document.getElementById("choices");

  const user_side = document.querySelector(".user .selection img");
  const cpu_side = document.querySelector(".cpu .selection img");

  center.classList.toggle(cls);
  banner.innerHTML = message;
  choices.style.pointerEvents = "none";
  user_side.src = `media/${userChoice}.png`;
  cpu_side.src = `media/${cpuChoice}.png`;

  setTimeout(() => {
    center.classList.toggle(cls);
    banner.innerHTML = "Choose wisely...";
    choices.style.pointerEvents = "all";
    user_side.src = "";
    cpu_side.src = "";
  }, 1500);

  updateScores();
}

function updateScores() {
  const user = document.getElementById("user-score");
  user.innerHTML = userScore;
  const cpu = document.getElementById("cpu-score");
  cpu.innerHTML = cpuScore;
}
