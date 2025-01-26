document.querySelector("#playGameButton").onclick = function () {
  document.querySelector("#playGameSpan").style.display = "none";
  document.querySelector("#gameContainer").style.display = "block";
};

document.querySelector("#restartGameButton").onclick = function () {
  document.querySelector("#gameContainer").style.display = "none";
  document.querySelector("#playGameSpan").style.display = "block";
};
