if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log("SW registered");
      console.log(registration);
    })
    .catch((error) => {
      console.log("SW Registration failed");
      console.log(error);
    });
}

let turnNumber;
let botDecision;
let botDecisionImage;
let yourDecision;
let yourScore = 0;
let botScore = 0;
let goalNum;
let knifeSummonNumber;
let knifeSummoned = false;

// control button functions:

document.querySelector("#playGameButton").onclick = function () {
  botScore = 0;
  yourScore = 0;

  document.querySelector("#restartGameButton").style.display = "inline-block";

  document.querySelector("#yourScore").textContent = yourScore;
  document.querySelector("#botScore").textContent = botScore;

  document.querySelector("#youChoseSpan").textContent = "";
  document.querySelector("#botChoseSpan").textContent = "";

  document.querySelector("#youChosePara").style.display = "none";
  document.querySelector("#botChosePara").style.display = "none";

  document.querySelector("#roundResults").textContent = "";

  while (true) {
    goalNum = Number(
      window.prompt(
        "Enter the goal number. The minimum value is 3. The knife will be usable if the goal is above 5."
      )
    );

    if (goalNum !== null && goalNum !== "" && goalNum >= 3 && goalNum <= 25) {
      alert("The goal is " + goalNum + ". Good Luck!");
      console.log("The goal is " + goalNum);
      if (goalNum > 5) {
        knifeSummonNumber = Math.floor((75 / 100) * goalNum);
        console.log("The knife summon number is " + knifeSummonNumber);
      }
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
  document.querySelector("#continueButtonSpan").style.display = "none";
  document.querySelector("#playGameButton").style.display = "block";
};

document.querySelector("#continueButton").onclick = function () {
  let existingYourDecisionImage = document.querySelector(
    "#yourDecisionImage img"
  );
  if (existingYourDecisionImage) {
    existingYourDecisionImage.remove();
  }

  document.querySelector("#continueButtonSpan").style.display = "none";
  document.querySelector("#results").style.display = "none";
  document.querySelector("#pickYourChoiceText").style.display = "block";
  document.querySelector("#roundResults").textContent = "";
  document.querySelector("#images").style.display = "block";

  if (goalNum > 5 && botScore === knifeSummonNumber && !knifeSummoned) {
    document.querySelector("#knife").style.display = "inline-block";
    alert("You have unlocked the knife! You can use it now. Be wise..");
    knifeSummoned = true;
  }
};

// player turn functions:

document.querySelector("#rock").onclick = function () {
  document.querySelector("#images").style.display = "none";
  document.querySelector("#continueButtonSpan").style.display = "block";
  document.querySelector("#youChosePara").style.display = "block";
  document.querySelector("#botChosePara").style.display = "block";

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
  document.querySelector("#continueButtonSpan").style.display = "block";
  document.querySelector("#youChosePara").style.display = "block";
  document.querySelector("#botChosePara").style.display = "block";

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
  document.querySelector("#continueButtonSpan").style.display = "block";
  document.querySelector("#youChosePara").style.display = "block";
  document.querySelector("#botChosePara").style.display = "block";

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

  document.querySelector("#pickYourChoiceText").style.display = "none";
  document.querySelector("#results").style.display = "inline-block";

  let yourDecisionImage = document.createElement("img");
  yourDecisionImage.setAttribute("src", "Images/knife.svg");
  yourDecisionImage.setAttribute("alt", "your choice");
  yourDecisionImage.style.border = "none";
  document.querySelector("#yourDecisionImage").appendChild(yourDecisionImage);

  document.querySelector("#botChoseSpan").textContent = "";
  let existingBotDecisionImage = document.querySelector(
    "#botDecisionImage img"
  );
  if (existingBotDecisionImage) {
    existingBotDecisionImage.remove();
  }

  //number selecting:
  let guessingNum;
  while (true) {
    guessingNum = Number(
      window.prompt(
        "Enter the number 1 or 2. The bot has to guess that number. If it guesses it, the game continues. If it doesn't, you win!"
      )
    );

    if (
      guessingNum !== null &&
      guessingNum !== "" &&
      guessingNum >= 1 &&
      guessingNum <= 2
    ) {
      let botGuess = Math.floor(Math.random() * 2) + 1;
      document.querySelector(
        "#youChoseSpan"
      ).textContent = `Knife, you also chose the number ${guessingNum} for the bot to guess.`;
      document.querySelector(
        "#botChoseSpan"
      ).textContent = `the number ${botGuess}`;
      if (botGuess === guessingNum) {
        document.querySelector("#continueButtonSpan").style.display = "block";
        document.querySelector("#roundResults").textContent =
          "The bot guessed your number! It gets a point.";
        botScore++;
        document.querySelector("#botScore").textContent = botScore;
        if (botScore === goalNum) {
          document.querySelector("#continueButtonSpan").style.display = "none";
          document.querySelector("#restartGameButton").style.display = "none";
          setTimeout(() => {
            alert(
              `The bot reached ${goalNum} before you. Click the play button to play again!`
            );
            document.querySelector("#gameContainer").style.display = "none";
            document.querySelector("#results").style.display = "none";
            document.querySelector("#playGameButton").style.display = "block";
          }, 2000);
        }
      } else {
        document.querySelector("#roundResults").textContent =
          "The bot guessed the wrong number, You win! Click the play button to play again(at the top).";
        document.querySelector("#continueButtonSpan").style.display = "none";
        document.querySelector("#restartGameButton").style.display = "none";
        document.querySelector("#playGameButton").style.display = "block";
      }
      break;
    } else {
      alert("Invalid number. Please enter a number between 1 and 2.");
    }
  }
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
          if (botScore === goalNum) {
            document.querySelector("#continueButtonSpan").style.display =
              "none";
            document.querySelector("#restartGameButton").style.display = "none";
            setTimeout(() => {
              alert(
                `The bot reached ${goalNum} before you. Click the play button to play again!`
              );
              document.querySelector("#gameContainer").style.display = "none";
              document.querySelector("#results").style.display = "none";
              document.querySelector("#playGameButton").style.display = "block";
            }, 2000);
          }
          break;

        case "scissors":
          document.querySelector("#roundResults").textContent =
            "You won, you get a point!";
          yourScore++;
          document.querySelector("#yourScore").textContent = yourScore;
          if (yourScore === goalNum) {
            document.querySelector("#continueButtonSpan").style.display =
              "none";
            document.querySelector("#restartGameButton").style.display = "none";
            setTimeout(() => {
              alert(
                `Congratulations, you have reached the goal! Click the play button to play again!`
              );
              document.querySelector("#gameContainer").style.display = "none";
              document.querySelector("#results").style.display = "none";
              document.querySelector("#playGameButton").style.display = "block";
            }, 2000);
          }
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
          if (yourScore === goalNum) {
            document.querySelector("#continueButtonSpan").style.display =
              "none";
            document.querySelector("#restartGameButton").style.display = "none";
            setTimeout(() => {
              alert(
                `Congratulations, you have reached the goal! Click the play button to play again!`
              );
              document.querySelector("#gameContainer").style.display = "none";
              document.querySelector("#results").style.display = "none";
              document.querySelector("#playGameButton").style.display = "block";
            }, 2000);
          }
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
          if (botScore === goalNum) {
            document.querySelector("#continueButtonSpan").style.display =
              "none";
            document.querySelector("#restartGameButton").style.display = "none";
            setTimeout(() => {
              alert(
                `The bot reached ${goalNum} before you. Click the play button to play again!`
              );
              document.querySelector("#gameContainer").style.display = "none";
              document.querySelector("#results").style.display = "none";
              document.querySelector("#playGameButton").style.display = "block";
            }, 2000);
          }
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
          if (botScore === goalNum) {
            document.querySelector("#continueButtonSpan").style.display =
              "none";
            document.querySelector("#restartGameButton").style.display = "none";
            setTimeout(() => {
              alert(
                `The bot reached ${goalNum} before you. Click the play button to play again!`
              );
              document.querySelector("#gameContainer").style.display = "none";
              document.querySelector("#results").style.display = "none";
              document.querySelector("#playGameButton").style.display = "block";
            }, 2000);
          }
          break;

        case "paper":
          document.querySelector("#roundResults").textContent =
            "You won, you get a point!";
          yourScore++;
          document.querySelector("#yourScore").textContent = yourScore;
          if (yourScore === goalNum) {
            document.querySelector("#continueButtonSpan").style.display =
              "none";
            document.querySelector("#restartGameButton").style.display = "none";
            setTimeout(() => {
              alert(
                `Congratulations, you have reached the goal! Click the play button to play again!`
              );
              document.querySelector("#gameContainer").style.display = "none";
              document.querySelector("#results").style.display = "none";
              document.querySelector("#playGameButton").style.display = "block";
            }, 2000);
          }

          break;

        case "scissors":
          document.querySelector("#roundResults").textContent =
            "It's a tie! No one gets a point.";
          break;
      }
      break;
  }
}
