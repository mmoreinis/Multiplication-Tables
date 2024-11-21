/* Question Loop */
function firstQuestion() {
  localStorage.setItem("question", 1);
  localStorage.setItem("feedback", "Let's go!");
  let mistakeList = [];
  localStorage.setItem("mistakeList", JSON.stringify(mistakeList));
  nextQuestion();
}

function nextQuestion() {
  let questions = parseInt(localStorage.getItem("questions"));
  let question = parseInt(localStorage.getItem("question"));
  if (question > questions) {
    window.location.href = "../pages/mistakes.html";
  }
  else {
    let questionHeader = document.getElementById("questionHeader");
    let mode = parseInt(localStorage.getItem("mode"));
    if (mode == 2) {
      let nextQuestionNumber = question;
      questionHeader.innerHTML = "Question "+ question + " of "+ questions;
    }
    else {
      let nextQuestionNumber = (questions+1)-question;
      questionHeader.innerHTML = nextQuestionNumber + " Left to Get Right!";
    }
  let factors = equationMaker();
  let x = factors[0];
  let y = factors[1];
  let feedback = localStorage.getItem("feedback");
  feedback = "<span class=\"feedback\">"+feedback+"</span><br /><br />";
  document.getElementById("nextQuestion").innerHTML = feedback+"What is " + x + " * " + y + "?";
  localStorage.setItem("solution",x * y);
  document.getElementById("inputBox").value="";
  document.getElementById("inputBox").focus();
  }
}

function checkAnswer(){
  let answer = document.getElementById("inputBox").value;
  let solution = parseInt(localStorage.getItem("solution"));
  answer = parseInt(answer);
  if (isNaN(answer)) {
    alert("Answer the question, then press \"Submit Answer\"");
  }
  let mode = parseInt(localStorage.getItem("mode"));
  if (mode == 2) {
    if (answer != solution) {
      let feedback = "<span class=\"feedback\">"+ answer + " is incorrect. Try again! </span><br /><br />";
      document.getElementById("nextQuestion").innerHTML = feedback +"What is " + x + " * " + y + "?";
      mistakeRecorder();
      document.getElementById("inputBox").value = "";
    }
    else {
      localStorage.setItem("feedback", answer + " is correct!");
      let question = parseInt(localStorage.getItem("question"));
      question++;
      localStorage.setItem("question", question);
      nextQuestion();
    }
  }
  else {
    if (answer != solution) {
      localStorage.setItem("feedback", answer + " is incorrect.");
      mistakeRecorder();
    }
    else {
      localStorage.setItem("feedback", answer + " is correct!");
      let question = parseInt(localStorage.getItem("question"));
      question++;
      localStorage.setItem("question", question);
    }
    nextQuestion();
  }
}

/* Make Equation */
function equationMaker() {
  let lowFactor = parseInt(localStorage.getItem("lowFactor"));
  let highFactor = parseInt(localStorage.getItem("highFactor"));
  // alert("High factor = "+highFactor);
  let x = Math.floor(Math.random() * (highFactor - lowFactor + 1)) + lowFactor;
  let y = Math.floor(Math.random() * (highFactor - lowFactor + 1)) + lowFactor;
  let factors = [x,y];
  return factors;
}

function mistakeRecorder() {
  var mistakeList = JSON.parse(localStorage.getItem("mistakeList"));
  mistakeList.push([x, y]);
  localStorage.setItem("mistakeList", JSON.stringify(mistakeList));
}
