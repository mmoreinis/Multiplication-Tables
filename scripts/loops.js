/* Loop Functions */
function questionMaker(){
  let lowFactor = parseInt(localStorage.getItem("lowFactor"));
  let highFactor = parseInt(localStorage.getItem("highFactor"));
  // alert("High factor = "+highFactor);
  x = Math.floor(Math.random()*(highFactor-lowFactor+1))+lowFactor;
  y = Math.floor(Math.random()*(highFactor-lowFactor+1))+lowFactor;
  solution = x * y;
}

  /* q Problems, tells answer or correct + # left 
  * + m mistakes made */
function forLoop(){
  var mistakes = 0;
  for(question = 1;question <= loopQuestions; question++){
    questionMaker();
    while (answer != solution) {
      answer = prompt("What is "+x+" * "+y+"?");
      if (answer != solution) {
        alert(answer + " is incorrect.");
        mistakeRecorder();
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
      if (answer != solution) {
        alert(answer + " is incorrect.");
        mistakeRecorder();
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

function mistakeRecorder(){
  var mistakeList = JSON.parse(localStorage.getItem("mistakeList"));
  mistakeList.push([x,y]);
  //alert(mistakeList);
  localStorage.setItem("mistakeList", JSON.stringify(mistakeList));
}