function whileLoop(){
  alert("While loop loading...");
  while(q <= 5){
      questionMaker();
      answer = prompt("What is "+x+" * "+y+"?");
      if (answer != x*y) {
        alert("Wrong!");
        m++;
      }
      else {
        alert("Correct! "+(5-q)+" left.");
        q++;
      }
  }
  return m;
}