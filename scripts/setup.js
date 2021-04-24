
function setDifficulty(level) {
  let lowFactor = 2;
  let highFactor = 9;
  if (level == 1) {
    lowFactor = 2;
    highFactor = 6;
  }
  else if (level == 2) {
    lowFactor = 2;
    highFactor = 9;
  }
  else if (level == 3) {
    lowFactor = 6;
    highFactor = 9;
  }
  else if (level == 4) {
    lowFactor = 2;
    highFactor = 2;
  }
  localStorage.setItem("lowFactor", lowFactor);
  localStorage.setItem("highFactor", highFactor);
}


function setLoop(mode) {
  let questions = 0;
  if (mode == 1) {
    questions = 10;
  }
  else if (mode == 2) {
    questions = 20;
  }
  else if (mode == 3) {
    questions = 2;
  }
  localStorage.setItem("mode", mode);
  localStorage.setItem("questions", questions);
  window.location.href = "../pages/answer.html";
}