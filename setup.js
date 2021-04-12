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
function factorsMenu(){
  var factorsMenu = "Choose difficulty:\n";
  factorsMenu += "1 = easy (3-6)\n";
  factorsMenu += "2 = standard (3-9)\n";
  factorsMenu += "3 = hard (6-9)\n";
  factorsMenu += "4 = custom (6-9)\n";
  factors=prompt(factorsMenu);
  setFactors(factors);
  window.location.href = "mode.html";
}

function setFactors(factors){
  alert("Factors set to level "+factors);
}