"use strict";

const hideDiceIMG = () => {
  document.querySelector(".dice").style.display = "none";
};
hideDiceIMG();

let playerTurn = "p1";
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let player1TotalScore = 0;
let player2TotalScore = 0;
let winScore = 20;

const rollDice = () => {
  let diceNum = Math.floor(Math.random() * 6 + 1);
  return diceNum;
};

const setCurrentScore = (diceNum) => {
  if (playerTurn === "p1") {
    player1CurrentScore += diceNum;

    document.querySelector("#current--0").innerHTML = player1CurrentScore;
  } else {
    player2CurrentScore += diceNum;
    document.querySelector("#current--1").innerHTML = player2CurrentScore;
  }
};

const resetCurrentScore = () => {
  if (playerTurn === "p1") {
    player1CurrentScore = 0;
    document.querySelector("#current--0").innerHTML = player1CurrentScore;
  } else {
    player2CurrentScore = 0;
    document.querySelector("#current--1").innerHTML = player2CurrentScore;
  }
};

const endGame = () => {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.className === "btn btn--new") {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
};

const setTotalScore = () => {
  if (playerTurn === "p1") {
    player1TotalScore += player1CurrentScore;
    player1CurrentScore = 0;

    if (player1TotalScore >= winScore) {
      document.querySelector(".player--0").classList.toggle("player--winner");
      endGame();
    } else {
      document.querySelector("#current--0").innerHTML = player1CurrentScore;
      document.querySelector("#score--0").innerHTML = player1TotalScore;
    }
  } else {
    player2TotalScore += player2CurrentScore;
    player2CurrentScore = 0;
    if (player2TotalScore >= winScore) {
      document.querySelector(".player--1").classList.toggle("player--winner");
      endGame();
    } else {
      document.querySelector("#current--1").innerHTML = player2CurrentScore;
      document.querySelector("#score--1").innerHTML = player2TotalScore;
    }
  }
};

const setPlayerTurn = () => {
  document.querySelector(".player--1").classList.toggle("player--active");
  document.querySelector(".player--0").classList.toggle("player--active");
  if (playerTurn === "p1") {
    playerTurn = "p2";

    //console.log(playerTurn);
  } else {
    playerTurn = "p1";

    //console.log(playerTurn);
  }
};

const showDiceNum = (diceNum) => {
  switch (diceNum) {
    case 1:
      //console.log("value is " + diceNum);
      document.querySelector(".dice").src = "dice-1.png";
      break;

    case 2:
      //console.log("value is " + diceNum);
      document.querySelector(".dice").src = "dice-2.png";
      break;

    case 3:
      //console.log("value is " + diceNum);
      document.querySelector(".dice").src = "dice-3.png";
      break;

    case 4:
      //console.log("value is " + diceNum);
      document.querySelector(".dice").src = "dice-4.png";
      break;

    case 5:
      //console.log("value is " + diceNum);
      document.querySelector(".dice").src = "dice-5.png";
      break;

    case 6:
      //console.log("value is " + diceNum);
      document.querySelector(".dice").src = "dice-6.png";
      break;

    default:
      //console.log("Please roll dice");
      break;
  }
};

// roll dice
document.querySelector(".btn--roll").addEventListener("click", () => {
  let diceNum = rollDice();

  if (diceNum === 1) {
    resetCurrentScore();
    setPlayerTurn();
    showDiceIMG();
    showDiceNum(diceNum);
  } else {
    setCurrentScore(diceNum, playerTurn);
    showDiceIMG();
    showDiceNum(diceNum);
  }
});

// hold score
document.querySelector(".btn--hold").addEventListener("click", () => {
  setTotalScore();
  resetCurrentScore();
  setPlayerTurn();
});

// new game
document.querySelector(".btn.btn--new").addEventListener("click", () => {
  location.reload();
});

const showDiceIMG = () => {
  document.querySelector(".dice").style.display = "block";
};
