let turnNumber;
let botDecision;
let botDecisionImage;
let yourDecision;
let yourScore = 0;
let botScore = 0;

// control button functions:

document.querySelector("#playGameButton").onclick = function () {
  let goalNum;
  botScore = 0;
  yourScore = 0;

  document.querySelector("#yourScore").textContent = yourScore;
  document.querySelector("#botScore").textContent = botScore;

  document.querySelector("#roundResults").textContent = "";

  while (true) {
    goalNum = window.prompt(
      "Enter the goal number. The minimum value is 3. The knife will be usable if the goal is above 5."
    );

    if (goalNum !== null && goalNum !== "" && goalNum >= 3 && goalNum <= 25) {
      alert("The goal is " + goalNum + ". Good Luck!");
      console.log("The goal is " + goalNum);
      break;
    } else {
      alert("Invalid input. Please enter a number between 3 and 25.");
    }
  }

  document.querySelector("#playGameButton").style.display = "none";
  document.querySelector("#gameContainer").style.display = "block";
  document.querySelector("#images").style.display = "block";
  document.querySelector("#knife").style.display = "none";
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
  document.querySelector("#continueButton").style.display = "none";
  document.querySelector("#playGameButton").style.display = "block";
};

document.querySelector("#continueButton").onclick = function () {
  let existingYourDecisionImage = document.querySelector(
    "#yourDecisionImage img"
  );
  if (existingYourDecisionImage) {
    existingYourDecisionImage.remove();
  }

  document.querySelector("#continueButton").style.display = "none";
  document.querySelector("#results").style.display = "none";
  document.querySelector("#pickYourChoiceText").style.display = "block";
  document.querySelector("#roundResults").textContent = "";
  document.querySelector("#images").style.display = "block";
};

// player turn functions:

document.querySelector("#rock").onclick = function () {
  document.querySelector("#images").style.display = "none";
  document.querySelector("#continueButton").style.display = "inline-block";

  document.querySelector("#pickYourChoiceText").style.display = "none";
  document.querySelector("#results").style.display = "inline-block";
  document.querySelector("#youChoseSpan").textContent = "Rock";

  let yourDecisionImage = document.createElement("img");
  yourDecisionImage.setAttribute("src", "Images/rock.svg");
  yourDecisionImage.setAttribute("alt", "your choice");
  yourDecisionImage.style.border = "none";
  document.querySelector("#yourDecisionImage").appendChild(yourDecisionImage);
  botTurn("rock");
};

document.querySelector("#paper").onclick = function () {
  document.querySelector("#images").style.display = "none";
  document.querySelector("#continueButton").style.display = "inline-block";

  document.querySelector("#pickYourChoiceText").style.display = "none";
  document.querySelector("#results").style.display = "inline-block";
  document.querySelector("#youChoseSpan").textContent = "Paper";

  let yourDecisionImage = document.createElement("img");
  yourDecisionImage.setAttribute("src", "Images/paper.svg");
  yourDecisionImage.setAttribute("alt", "your choice");
  yourDecisionImage.style.border = "none";
  document.querySelector("#yourDecisionImage").appendChild(yourDecisionImage);
  botTurn("paper");
};

document.querySelector("#scissors").onclick = function () {
  document.querySelector("#images").style.display = "none";
  document.querySelector("#continueButton").style.display = "inline-block";

  document.querySelector("#pickYourChoiceText").style.display = "none";
  document.querySelector("#results").style.display = "inline-block";
  document.querySelector("#youChoseSpan").textContent = "Scissors";

  let yourDecisionImage = document.createElement("img");
  yourDecisionImage.setAttribute("src", "Images/scissors.svg");
  yourDecisionImage.setAttribute("alt", "your choice");
  yourDecisionImage.style.border = "none";
  document.querySelector("#yourDecisionImage").appendChild(yourDecisionImage);
  botTurn("scissors");
};

document.querySelector("#knife").onclick = function () {
  document.querySelector("#images").style.display = "none";
  document.querySelector("#continueButton").style.display = "inline-block";

  document.querySelector("#pickYourChoiceText").style.display = "none";
  document.querySelector("#results").style.display = "inline-block";
  document.querySelector("#youChoseSpan").textContent = "Knife";

  let yourDecisionImage = document.createElement("img");
  yourDecisionImage.setAttribute("src", "Images/knife.svg");
  yourDecisionImage.setAttribute("alt", "your choice");
  yourDecisionImage.style.border = "none";
  document.querySelector("#yourDecisionImage").appendChild(yourDecisionImage);
  // botTurn();
};

function botTurn(playerChoice) {
  let existingBotDecisionImage = document.querySelector(
    "#botDecisionImage img"
  );
  if (existingBotDecisionImage) {
    existingBotDecisionImage.remove();
  }

  let botChoice;

  let botDecision = Math.floor(Math.random() * 3) + 1;
  switch (botDecision) {
    case 1:
      document.querySelector("#botChoseSpan").textContent = "Rock";

      botDecisionImage = document.createElement("img");
      botDecisionImage.setAttribute("src", "Images/rock.svg");
      botDecisionImage.setAttribute("alt", "bot choice");
      botDecisionImage.style.border = "none";
      document.querySelector("#botDecisionImage").appendChild(botDecisionImage);
      botChoice = "rock";
      break;
    case 2:
      document.querySelector("#botChoseSpan").textContent = "Paper";

      botDecisionImage = document.createElement("img");
      botDecisionImage.setAttribute("src", "Images/paper.svg");
      botDecisionImage.setAttribute("alt", "bot choice");
      botDecisionImage.style.border = "none";
      document.querySelector("#botDecisionImage").appendChild(botDecisionImage);
      botChoice = "paper";
      break;
    case 3:
      document.querySelector("#botChoseSpan").textContent = "Scissors";

      botDecisionImage = document.createElement("img");
      botDecisionImage.setAttribute("src", "Images/scissors.svg");
      botDecisionImage.setAttribute("alt", "bot choice");
      botDecisionImage.style.border = "none";
      document.querySelector("#botDecisionImage").appendChild(botDecisionImage);
      botChoice = "scissors";
      break;
  }

  switch (playerChoice) {
    case "rock":
      switch (botChoice) {
        case "rock":
          document.querySelector("#roundResults").textContent =
            "It's a tie! No one gets a point.";
          break;
        case "paper":
          document.querySelector("#roundResults").textContent =
            "The Bot won, it gets a point!";
          botScore++;
          document.querySelector("#botScore").textContent = botScore;
          break;
        case "scissors":
          document.querySelector("#roundResults").textContent =
            "You won, you get a point!";
          yourScore++;
          document.querySelector("#yourScore").textContent = yourScore;
          break;
      }
      break;
    case "paper":
      switch (botChoice) {
        case "rock":
          document.querySelector("#roundResults").textContent =
            "You won, you get a point!";
          yourScore++;
          document.querySelector("#yourScore").textContent = yourScore;
          break;
        case "paper":
          document.querySelector("#roundResults").textContent =
            "It's a tie! No one gets a point.";
          break;
        case "scissors":
          document.querySelector("#roundResults").textContent =
            "The Bot won, it gets a point!";
          botScore++;
          document.querySelector("#botScore").textContent = botScore;
          break;
      }
      break;
    case "scissors":
      switch (botChoice) {
        case "rock":
          document.querySelector("#roundResults").textContent =
            "The Bot won, it gets a point!";
          botScore++;
          document.querySelector("#botScore").textContent = botScore;
          break;
        case "paper":
          document.querySelector("#roundResults").textContent =
            "You won, you get a point!";
          yourScore++;
          document.querySelector("#yourScore").textContent = yourScore;
          break;
        case "scissors":
          document.querySelector("#roundResults").textContent =
            "It's a tie! No one gets a point.";
          break;
      }
      break;
    case "knife":
      //in progress...
      break;
  }
}
