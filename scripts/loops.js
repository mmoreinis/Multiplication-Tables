/* Loop Functions */

page = "question";
function questionMaker(){
  x = Math.floor(Math.random()*(highFactor-lowFactor+1))+lowFactor;
  y = Math.floor(Math.random()*(highFactor-lowFactor+1))+lowFactor;
}


  /* q Problems, tells answer or correct + # left 
  * + m mistakes made */
function forLoop(){
  var mistakes = 0;
  for(question = 1;question <= loopQuestions; question++){
    questionMaker();
    while (answer != x*y) {
      answer = prompt("What is "+x+" * "+y+"?");
      if (answer != x*y) {
        alert("Wrong!");
        mistakes ++;
      }
      else {
        var qLeft = loopQuestions-question;
        alert("Correct! "+ qLeft +" left.");
      }
    }
  }
  return mistakes;
}

  /* # Problems, tells answer or correct + # left 
  * + # mistakes made */
function whileLoop(){
  question = 1;
  while(question <= whileQuestions){
      questionMaker();
      answer = prompt("What is "+x+" * "+y+"?");
      if (answer != x*y) {
        alert("Wrong!");
        mistakes ++;
      }
      else {
        var qLeft = whileQuestions - question;
        alert("Correct! "+ qLeft +" left to get right.");
        question++;
      }
  }
  return mistakes;
}