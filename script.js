"use strict";

//  Variables and Functions
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let guess = Number(document.querySelector(".guess").value);
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};
const displayScore = function(score) {
    document.querySelector("span.score").textContent = score;
};
const displayNumber = function(number) {
    document.querySelector(".number").textContent = number;
};
const styleNumber = function(style) {
    document.querySelector(".number").style.width = style;
};
const styleBody = function(style) {
    document.querySelector(".body").style.backgroundColor = style;
};

// Reset button
const reset = function() {
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".guess").value = "";
    displayScore(score);
    styleBody("black");
    styleNumber("15rem");
    displayMessage("Start guessing...");
    displayNumber("?");
};
// Check Buton

const play = function() {
    const guess = Number(document.querySelector(".guess").value);

    // When value is empty
    if (!guess) {
        displayMessage("No number!");

        // When number is right
    } else if (guess === randomNumber) {
        displayMessage("Correct Number!");
        styleBody("#60b347");
        styleNumber("30rem");
        displayNumber(randomNumber);
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

        // When number is too high or too low
    } else if (guess !== randomNumber && score > 1) {
        displayMessage(guess > randomNumber ? "Too High!" : "Too Low!");
        score--;
        displayScore(score);

        // When player is out of score
    } else {
        displayMessage("You lost the game!");
        displayScore(0);
    }
};

// Handling Buttons
document.querySelector(".check").addEventListener("click", play);
document.querySelector(".again").addEventListener("click", reset);