function theRest(){
  
  
function forLoop(){
  alert("For Loop");
}

/* While Loop Mode 1 or 3 */
function answerQuestion() {
    let answer = document.getElementById("inputBox").textContent;
    localStorage.setItem("answer",answer);
    if (answer != "Answer?") {
      if (answer != solution) {
        alert(answer + " is incorrect.");
        mistakeRecorder();
      }
      else {
        let qLeft = questions - question;
        alert("Correct! " + qLeft + " left to get right.");
        localStorage.setItem("question",question++);
      }
    }
    else if (question > 1) {
      alert("Answer the question first.");
    }
  }
}



/* For Loop Mode 2 */
function forLoop() {
  let mistakes = 0, x = 0, y = 0;
  let questions = parseInt(localStorage.getItem("questions"));
  let questionHeader = document.getElementById("questionHeader");
  let nextQuestion = document.getElementById("nextQuestion");
  for (question = 1; question <= questions; question++) {
    let qHeader = "Question "+question+" of "+questions);
    questionHeader.innerHTML = qHeader;
    equationMaker();
    nextQuestion.innerHTML = "What is " + x + " * " + y + "?";
    let solution = x * y;
    while (answer != solution) {
      answer = prompt("What is " + x + " * " + y + "?");
      localStorage.setItem("nextQuestion", "What is " + x + " * " + y + "?";
      let answer = document. getElementById('inputBox'). textContent;
      if (answer != solution) {
        alert(answer + " is incorrect.");
        mistakeRecorder();
      }
      else {
        let qLeft = loopQuestions - question;
        alert("Correct! " + qLeft + " left.");
      }
    }
  }
  window.location.href = "../pages/mistakes.html";
}

