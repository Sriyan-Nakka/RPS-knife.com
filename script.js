let turnNumber;

// button functions:

document.querySelector("#playGameButton").onclick = function () {
  document.querySelector("#playGameButton").style.display = "none";
  document.querySelector("#gameContainer").style.display = "block";
  document.querySelector("#paper").style.display = "inline-block";
  document.querySelector("#scissors").style.display = "inline-block";
  document.querySelector("#knife").style.display = "inline-block";
  document.querySelector("#rock").style.display = "inline-block";
  document.querySelector("#pickYourChoiceText").style.display = "inline-block";
};

document.querySelector("#restartGameButton").onclick = function () {
  document.querySelector("#gameContainer").style.display = "none";
  document.querySelector("#playGameButton").style.display = "block";
};

// rock paper scissors and knife functions:

document.querySelector("#rock").onclick = function () {
  document.querySelector("#paper").style.display = "none";
  document.querySelector("#scissors").style.display = "none";
  document.querySelector("#knife").style.display = "none";
  document.querySelector("#pickYourChoiceText").style.display = "none";
};

document.querySelector("#paper").onclick = function () {
  document.querySelector("#rock").style.display = "none";
  document.querySelector("#scissors").style.display = "none";
  document.querySelector("#knife").style.display = "none";
  document.querySelector("#pickYourChoiceText").style.display = "none";
};

document.querySelector("#scissors").onclick = function () {
  document.querySelector("#rock").style.display = "none";
  document.querySelector("#paper").style.display = "none";
  document.querySelector("#knife").style.display = "none";
  document.querySelector("#pickYourChoiceText").style.display = "none";
};

document.querySelector("#knife").onclick = function () {
  document.querySelector("#rock").style.display = "none";
  document.querySelector("#paper").style.display = "none";
  document.querySelector("#scissors").style.display = "none";
  document.querySelector("#pickYourChoiceText").style.display = "none";
  botTurn();
};

//turn functions(in progress):

// function botTurn() {
//   let botDecisionImage = document.createElement("img");
//   botDecisionImage.setAttribute("src", "images/knife.svg");
//   botDecisionImage.setAttribute("alt", "bot choice");
//   document.querySelector("#gameContainer").appendChild(botDecisionImage);
// }
