function forLoop(){
  /* 5 Problems, tells answer or correct + # left 
  * + # mistakes made */
  alert("For loop loading...");
  for(var q = 1;q <= loopQuestions; q++){
    questionMaker();
    while (answer != x*y) {
      answer = prompt("What is "+x+" * "+y+"?");
      if (answer != x*y) {
        alert("Wrong!");
        m++;
      }
      else {
        alert("Correct! "+(loopQuestions-q)+" left.");
      }
    }
  }
  alert("You made "+ m + " mistakes.");
}