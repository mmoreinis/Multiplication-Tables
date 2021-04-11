function whileLoop(){
  alert("While loop loading...");
  var q=1, answer=0, x=0, y=0, m = 0;
while(q <= 5){
  x = Math.floor(Math.random()*7)+3;
  y = Math.floor(Math.random()*7)+3;
  // while (answer != x*y) {
    answer = prompt("What is "+x+" * "+y+"?");
    if (answer != x*y) {
      alert("Wrong!");
      m++;
    }
    else {
      alert("Correct! "+(5-q)+" left.");
      q++;
    }
  //}
}
// alert("You had "+ m + " mistakes.");
return m;
}