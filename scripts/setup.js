function setDifficulty(level){
  page = "difficulty";
  alert("Factors set to level "+factors);
}

function setLoop(mode){
  page = "looptype";
  if (mode ==1){
    alert("How fast can you get "+whileQuestions+" right?");
    mistakes = whileLoop();
    alert("You had "+ mistakes + " mistakes.");
    }
  else if 
    (mode==2) {
    alert("How few mistakes can you make in "+loopQuestions+" questions?");
    mistakes = forLoop();
    alert("You had "+ mistakes + " mistakes.");set
  }
  else if (mode ==3){
    alert("Customize it!");
    mistakes = whileLoop();
    alert("You had "+ mistakes + " mistakes.");
  }
}