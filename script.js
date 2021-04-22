/* Multiplication Master Code */

/* Global Variables */

var loopQuestions = 25;
var whileQuestions = 10;
var answer = 0;
var factors = [0.0]
var mistakeList = [];
localStorage.removeItem("mistakeList");
localStorage.setItem("mistakeList", JSON.stringify(mistakeList));
var questionsRight = 0;
var question = 0; 
var page = "index";
var lowFactor = 2;
var highFactor = 9;
var mistakes=0;
localStorage.setItem("tableBody", "");
localStorage.setItem("mistakes", 0);