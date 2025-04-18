let turnNumber;

document.querySelector("#playGameButton").onclick = function () {
  document.querySelector("#playGameButton").style.display = "none";
  document.querySelector("#gameContainer").style.display = "block";
};

document.querySelector("#restartGameButton").onclick = function () {
  document.querySelector("#gameContainer").style.display = "none";
  document.querySelector("#playGameButton").style.display = "block";
};

document.querySelector("#rock").onclick = function () {
  console.log("rock clicked");
};
document.querySelector("#paper").onclick = function () {
  console.log("paper clicked");
};
document.querySelector("#scissors").onclick = function () {
  console.log("scissors clicked");
};
document.querySelector("#knife").onclick = function () {
  console.log("knife clicked");
};
