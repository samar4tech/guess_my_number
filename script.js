"use strict";

document.querySelector(".number").addEventListener("mouseover", function () {
  document.querySelector(".number").textContent = "Guess Me";
  document.querySelector(".number").style.fontSize = "2rem";
});
document.querySelector(".number").addEventListener("mouseleave", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.fontSize = "6rem";
});

let rnd = Math.trunc(20 * Math.random()) + 1;
let score = 20;
let highscore = 0;
const displayMsg = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no input
  if (!guess) {
    displayMsg("😡 No Number");
  }
  //when player wins
  else if (guess === rnd) {
    displayMsg("🎉correct Number ");

    document.querySelector(".number").textContent = rnd;
    document.querySelector("header").style.background =
      "linear-gradient(to top, hsl(323 21% 16%) 30%, rgb(88, 53, 76))";
    document.querySelector("main").style.background =
      "linear-gradient(to top, hsl(323 21% 16%) 50%, rgb(88, 53, 76))";
    document.querySelector(".number").style.width = "25rem";
    document.querySelector("h1").textContent = "You are Champion 🏆";
    document.querySelector(".again").style.boxShadow =
      "inset 0 0 6px 6px hsl(323 21% 16%) ";
    document.querySelector(".number").style.boxShadow =
      "inset 0 0 6px 6px hsl(323 21% 16%) ";
    document.querySelector(".check").style.boxShadow =
      "inset 0 0 6px 6px hsl(323 21% 16%) ";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //when guess is wrong
  else if (guess !== rnd) {
    if (score > 1) {
      displayMsg(guess > rnd ? "❌guess is high " : "💹guess is low ");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMsg("😥you lost the game");

      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  rnd = Math.trunc(20 * Math.random()) + 1;
  score = 20;
  displayMsg("Start guessing...");
  document.querySelector("h1").textContent = "Guess My Number!";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("header").style.background =
    "linear-gradient(to top, rgb(9, 27, 27) 30%, rgb(28, 99, 99))";
  document.querySelector("main").style.background =
    " linear-gradient(rgb(9, 27, 27) 50%, rgb(28, 99, 99))";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".again").style.boxShadow =
    "inset 0 0 6px 6px rgb(9, 27, 27) ";
  document.querySelector(".number").style.boxShadow =
    "inset 0 0 6px 6px rgb(9, 27, 27)";
  document.querySelector(".check").style.boxShadow =
    "inset 0 0 6px 6px rgb(9, 27, 27) ";
});
