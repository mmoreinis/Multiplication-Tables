/* Question Loop */
function questionLoop() {
  let mode = parseInt(localStorage.getItem("mode"));
  let mistakeList = [];
  localStorage.setItem("mistakeList", JSON.stringify(mistakeList));
  if (mode == 2) {
    forLoop();
  }
  else {
    whileLoop();
  }
}


/* While Loop Mode 1 or 3 */
function whileLoop() {
  let questions = parseInt(localStorage.getItem("questions"));
  question = 1;
  while (question <= questions) {
    equationMaker();
    let answer = prompt("What is " + x + " * " + y + "?");
    let solution = x * y;
    if (answer != solution) {
      alert(answer + " is incorrect.");
      mistakeRecorder();
    }
    else {
      let qLeft = questions - question;
      alert("Correct! " + qLeft + " left to get right.");
      question++;
    }
  }
  window.location.href = "../pages/mistakes.html";
}

/* For Loop Mode 2 */
function forLoop() {
  let mistakes = 0, x = 0, y = 0;
  let questions = parseInt(localStorage.getItem("questions"));
  for (question = 1; question <= questions; question++) {
    equationMaker();
    let solution = x * y;
    while (answer != solution) {
      answer = prompt("What is " + x + " * " + y + "?");
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


/* Make Equation */
function equationMaker() {
  let lowFactor = parseInt(localStorage.getItem("lowFactor"));
  let highFactor = parseInt(localStorage.getItem("highFactor"));
  // alert("High factor = "+highFactor);
  x = Math.floor(Math.random() * (highFactor - lowFactor + 1)) + lowFactor;
  y = Math.floor(Math.random() * (highFactor - lowFactor + 1)) + lowFactor;
}



function mistakeRecorder() {
  var mistakeList = JSON.parse(localStorage.getItem("mistakeList"));
  mistakeList.push([x, y]);
  localStorage.setItem("mistakeList", JSON.stringify(mistakeList));
}