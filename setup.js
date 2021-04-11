function setMode(mode){
  var menu = "** MULTIPLICATION MENU **\n\n";
  menu += "Do you want to answer questions until you get 10 right,\n";
  menu += "or do you want to answer 25 questions?\n\n";
  menu +=" 1 = All 25 questions\n";
  menu +=" 2 = First 10 right\n";
  var mode = prompt(menu);
  if (mode=="1") {
    forLoop();
  }
  else if (mode =="2"){
    var m = whileLoop();
    alert("You had "+ m + " mistakes.");
  }
}


function setFactors(level){
  alert("Level is: "+level);
}