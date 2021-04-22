/* Get FactorList */
// Analyzes mistakes and returns the times table to study
function getStudyTable() {
  var mistakesList = JSON.parse(localStorage.getItem("mistakeList"));
  var factorList=[];
  for (var factor = 0; factor < mistakesList.length; factor++) {
    factorList.push(mistakesList[factor][0]);
    factorList.push(mistakesList[factor][1]);
  }
  factorList = factorList.sort();
  factorList = factorList.reverse();
  var studyTable = findFactor(factorList);
  return studyTable;
}

/* StudyList */
// returns the highst of factors with most duplicates from passed array 
function findFactor(array){
  var mostFrequent = 11; // most frequent item
  var counts = []; // array of counts of items in order
  var dupes = 0; // number of dupes so far
  var factor = 0; // value of an array item
  // Iterate over all items in array
  for(var item = 0; item < array.length; item++){
    // look at the next item
    factor = array[item];
    // have we counted this factor before? 
    if(counts[factor] == undefined) {
      // count it, so counts[3] will be number of 3s
      counts[factor] = 1;
    }
    else {
      // add one to that count
      counts[factor] += 1;
    }
    // does this factor have the most dupes?
    if(counts[factor] > dupes){
      dupes = counts[factor];
      mostFrequent = array[item];
    }
  }
  // now that we're cone, we have the highest, most frequent value
  return mostFrequent;
}

/* Times Table Maker */
function tableMaker(newTable){
  var storedTable = localStorage.getItem("oldTable");
  var tableBody = "";
  var table = 1;
  if (newTable == 0 && storedTable == 0){
    table = prompt("Generate table for (1-9)");
  } 
  else if (storedTable == 0) {
    table = newTable;
  }
  else {
    table = getStudyTable();
  }
  var tableHead = "Times Table for "+table;
  var tableHeader = document.getElementById("tableHeader");
  tableHeader.innerHTML = tableHead;
  for (var factor = 2; factor < 10; factor++) {
    tableBody += table+" * "+factor+" = "+table*factor+"<br />";
  }
  var customMessage = document.getElementById("customMessage");
  customMessage.innerHTML = "We recommend you study the <span style=\"color:green;\">"+ table +" times table below</span> based on your previous errors.";
  var statBox = document.getElementById("stats");
  statBox.innerHTML = tableBody;
  localStorage.setItem("oldTable", 0);
}