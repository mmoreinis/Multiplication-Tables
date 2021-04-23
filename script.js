/* Multiplication Master Code */

/* Global Variables */
localStorage.setItem("loopQuestions", "25");
localStorage.setItem("whileQuestions", "10");
var mistakeList = [];
localStorage.setItem("mistakeList", JSON.stringify(mistakeList));
localStorage.setItem("tableBody", "");
localStorage.setItem("mistakes", 0);

/* Play Again */
function playAgain() {
  localStorage.removeItem("mistakeList");
}