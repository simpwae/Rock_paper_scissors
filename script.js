let user = 0;
let comp = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let compScore = document.querySelector("#comp-score");
let userScore = document.querySelector("#user-score");

const drawGame = () => {
  console.log("the game was a Draw");
  msg.innerText = "It was a Draw!!";
};
const showWinner = (userWin) => {
  if (userWin) {
    console.log("You Win!!");
    user++;
    msg.innerText = "You Win!!";
    userScore.innerText = user;
  } else {
    console.log("You lost");
    comp++;
    msg.innerText = "You lost!!";
    compScore.innerText = comp;
  }
};

const getCompChoise = () => {
  const options = ["rock", "paper", "scissors"];
  const getIndx = Math.floor(Math.random() * 3);
  return options[getIndx];
};

const playGame = (userChoice) => {
  console.log(userChoice);
  const compChoice = getCompChoise();
  console.log(compChoice);

  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice == "scissors" ? true : false;
    } else if (userChoice == "paper") {
      userWin = compChoice == "scissors" ? false : true;
    } else {
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choise was clicked", getId);

    playGame(userChoice);
  });
});
