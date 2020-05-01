let userScore = 0;
let cpuScore = 0;

const Actual = ["rock", "paper", "scissors"];
const Beats = ["paper", "scissors", "rock"];

const WonMessages = [
  "Hmm... A worthy opponent",
  "You must be cheating!",
  "What great use of tactics and strategy I'm witnessing.",
];
const LostMessages = [
  "Pathetic",
  "You weren't that good anyways",
  "This is all you've got?",
];
const DrawMessages = [
  "NO! It's a draw!!!",
  "You're only lucky this time...",
  "I call hax",
];

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
  const cpuChoice = Math.floor(Math.random() * 3);

  let cls;

  if (Beats[cpuChoice] === userChoice) {
    userScore++;
    cls = "won";
  } else if (Actual[cpuChoice] === userChoice) {
    cls = "draw";
  } else {
    cpuScore++;
    cls = "lost";
  }

  updateInterface(userChoice, Actual[cpuChoice], cls);
}

function updateInterface(userChoice, cpuChoice, cls) {
  const message = chooseMessage(cls);

  const center = document.querySelector(".center");
  const banner = document.querySelector(".banner");
  const choices = document.getElementById("choices");

  const user_side = document.querySelector(".user .selection img");
  const cpu_side = document.querySelector(".cpu .selection img");

  center.classList.toggle(cls);
  choices.style.pointerEvents = "none";
  banner.innerHTML = message;
  user_side.src = `media/${userChoice}.png`;
  cpu_side.src = `media/${cpuChoice}.png`;

  setTimeout(() => {
    center.classList.toggle(cls);
    banner.innerHTML = "Choose wisely...";
    choices.style.pointerEvents = "all";
    user_side.src = "";
    cpu_side.src = "";
  }, 2000);

  updateScores();
}

function chooseMessage(cls) {
  const messageIndex = Math.floor(Math.random() * 3);
  let message;
  switch (cls) {
    case "won":
      message = WonMessages[messageIndex];
      break;

    case "lost":
      message = LostMessages[messageIndex];
      break;

    default:
      message = DrawMessages[messageIndex];
      break;
  }
  return message;
}

function updateScores() {
  const user = document.getElementById("user-score");
  user.innerHTML = userScore;
  const cpu = document.getElementById("cpu-score");
  cpu.innerHTML = cpuScore;
}
