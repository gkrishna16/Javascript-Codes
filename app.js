let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Computer Choice (Random)
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter == "r") return "Rock";
  if (letter == "p") return "Paper";
  return "Scissors";
}

//Functions for win,lose and draw.

//Win Function

function win(userChoice, computerChoice) {
  //.....
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  //........
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "computer".fontsize(3).sup();
  //.........
  result_p.innerHTML = `${convertToWord(
    userChoice
  )} ${smallUserWord} beats  ${convertToWord(
    computerChoice
  )} ${smallCompWord} You Win! `;

  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("green-glow"),
    3000
  );
}

//Lose function

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "computer".fontsize(3).sup();

  result_p.innerHTML = `${convertToWord(computerChoice)} ${smallCompWord}
    beats 
    ${convertToWord(userChoice)} ${smallUserWord}
    You lost !`;

  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("red-glow"),
    2000
  );
}

//Draw Function

function draw(userChoice, computerChoice) {
  userScore;
  computerScore;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;

  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "computer".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(computerChoice)} ${smallCompWord}
    equals  
    ${convertToWord(userChoice)} ${smallUserWord}
    It is a DRAW baby ! `;
  document.getElementById(userChoice).classList.add("grey-glow");

  setTimeout(
    () => document.getElementById(userChoice).classList.remove("grey-glow"),
    3000
  );
}

// Function of outcome.

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
  }
}

//Click Event Listener

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}
main();
