
function setDifficulty(level){
  // alert("Difficulty level set to "+level);
  if (level == 1){
    lowFactor = 2;
    highFactor = 6;
  }
   else if (level == 2){
    lowFactor = 2;
    highFactor = 9;
 } 
 else if (level == 3){
    lowFactor = 6;
    highFactor = 9;
 } 
 else if (level == 4){
    alert("custom");
 } 
  localStorage.setItem("lowFactor", lowFactor);
  localStorage.setItem("highFactor", highFactor);
}


function setLoop(mode){
  // alert("Practice mode set to mode "+mode);
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