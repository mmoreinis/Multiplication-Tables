function forLoop(){
  /* 5 Problems, tells answer or correct + # left 
  * + # mistakes made */
  var answer=0, x=0, y=0, m = 0;
  for(var q = 1;q < 6; q++){
    x = Math.floor(Math.random()*7)+3;
    y = Math.floor(Math.random()*7)+3;
    while (answer != x*y) {
      answer = prompt("What is "+x+" * "+y+"?");
      if (answer != x*y) {
        alert("Wrong!");
        m++;
      }
      else {
        alert("Correct! "+(5-q)+" left.");
      }
    }
  }
  alert("You made "+ m + " mistakes.");
}