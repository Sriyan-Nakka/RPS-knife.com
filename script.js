let turnNumber;
let botDecision;
let botDecisionImage;
let yourDecision;

// button functions:

document.querySelector("#playGameButton").onclick = function () {
  document.querySelector("#playGameButton").style.display = "none";
  document.querySelector("#gameContainer").style.display = "block";
  document.querySelector("#paper").style.display = "inline-block";
  document.querySelector("#scissors").style.display = "inline-block";
  document.querySelector("#knife").style.display = "none";
  document.querySelector("#rock").style.display = "inline-block";
  document.querySelector("#pickYourChoiceText").style.display = "inline-block";

  let existingYourDecisionImage = document.querySelector(
    "#yourDecisionImage img"
  );
  if (existingYourDecisionImage) {
    existingYourDecisionImage.remove();
  }
};

document.querySelector("#restartGameButton").onclick = function () {
  document.querySelector("#gameContainer").style.display = "none";
  document.querySelector("#results").style.display = "none";
  document.querySelector("#playGameButton").style.display = "block";
};

// rock paper scissors and knife functions:

document.querySelector("#rock").onclick = function () {
  document.querySelector("#paper").style.display = "none";
  document.querySelector("#scissors").style.display = "none";
  document.querySelector("#knife").style.display = "none";
  document.querySelector("#rock").style.display = "none";

  document.querySelector("#pickYourChoiceText").style.display = "none";
  document.querySelector("#results").style.display = "inline-block";
  document.querySelector("#youChoseSpan").textContent = "Rock";

  let yourDecisionImage = document.createElement("img");
  yourDecisionImage.setAttribute("src", "Images/rock.svg");
  yourDecisionImage.setAttribute("alt", "your choice");
  yourDecisionImage.style.border = "none";
  document.querySelector("#yourDecisionImage").appendChild(yourDecisionImage);
  botTurn();
};

document.querySelector("#paper").onclick = function () {
  document.querySelector("#rock").style.display = "none";
  document.querySelector("#scissors").style.display = "none";
  document.querySelector("#knife").style.display = "none";
  document.querySelector("#paper").style.display = "none";

  document.querySelector("#pickYourChoiceText").style.display = "none";
  document.querySelector("#results").style.display = "inline-block";
  document.querySelector("#youChoseSpan").textContent = "Paper";

  let yourDecisionImage = document.createElement("img");
  yourDecisionImage.setAttribute("src", "Images/paper.svg");
  yourDecisionImage.setAttribute("alt", "your choice");
  yourDecisionImage.style.border = "none";
  document.querySelector("#yourDecisionImage").appendChild(yourDecisionImage);
  botTurn();
};

document.querySelector("#scissors").onclick = function () {
  document.querySelector("#rock").style.display = "none";
  document.querySelector("#paper").style.display = "none";
  document.querySelector("#knife").style.display = "none";
  document.querySelector("#scissors").style.display = "none";

  document.querySelector("#pickYourChoiceText").style.display = "none";
  document.querySelector("#results").style.display = "inline-block";
  document.querySelector("#youChoseSpan").textContent = "Scissors";

  let yourDecisionImage = document.createElement("img");
  yourDecisionImage.setAttribute("src", "Images/scissors.svg");
  yourDecisionImage.setAttribute("alt", "your choice");
  yourDecisionImage.style.border = "none";
  document.querySelector("#yourDecisionImage").appendChild(yourDecisionImage);
  botTurn();
};

document.querySelector("#knife").onclick = function () {
  document.querySelector("#rock").style.display = "none";
  document.querySelector("#paper").style.display = "none";
  document.querySelector("#scissors").style.display = "none";
  document.querySelector("#knife").style.display = "none";

  document.querySelector("#pickYourChoiceText").style.display = "none";
  document.querySelector("#results").style.display = "inline-block";
  document.querySelector("#youChoseSpan").textContent = "Knife";

  let yourDecisionImage = document.createElement("img");
  yourDecisionImage.setAttribute("src", "Images/knife.svg");
  yourDecisionImage.setAttribute("alt", "your choice");
  yourDecisionImage.style.border = "none";
  document.querySelector("#yourDecisionImage").appendChild(yourDecisionImage);
  botTurn();
};

function botTurn() {
  let existingBotDecisionImage = document.querySelector(
    "#botDecisionImage img"
  );
  if (existingBotDecisionImage) {
    existingBotDecisionImage.remove();
  }

  // Generate a new bot choice
  let botChoice = Math.floor(Math.random() * 3) + 1;
  switch (botChoice) {
    case 1:
      document.querySelector("#botChoseSpan").textContent = "Rock";

      botDecisionImage = document.createElement("img");
      botDecisionImage.setAttribute("src", "Images/rock.svg");
      botDecisionImage.setAttribute("alt", "bot choice");
      botDecisionImage.style.border = "none";
      document.querySelector("#botDecisionImage").appendChild(botDecisionImage);
      break;
    case 2:
      document.querySelector("#botChoseSpan").textContent = "Paper";

      botDecisionImage = document.createElement("img");
      botDecisionImage.setAttribute("src", "Images/paper.svg");
      botDecisionImage.setAttribute("alt", "bot choice");
      botDecisionImage.style.border = "none";
      document.querySelector("#botDecisionImage").appendChild(botDecisionImage);
      break;
    case 3:
      document.querySelector("#botChoseSpan").textContent = "Scissors";

      botDecisionImage = document.createElement("img");
      botDecisionImage.setAttribute("src", "Images/scissors.svg");
      botDecisionImage.setAttribute("alt", "bot choice");
      botDecisionImage.style.border = "none";
      document.querySelector("#botDecisionImage").appendChild(botDecisionImage);
      break;
  }
}
