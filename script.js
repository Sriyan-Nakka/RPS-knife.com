document.querySelector("#playGameButton").onclick = function () {
  document.querySelector("#playGameButton").style.visibility = "hidden";
  document.querySelector("#gameContainer").style.display = "block";
};

document.querySelector("#restartGameButton").onclick = function () {
  document.querySelector("#gameContainer").style.display = "none";
  document.querySelector("#playGameButton").style.visibility = "visible";
};
