/* Times Table Maker */
function tableMaker() {
  let tableBody = "";
  let table = parseInt(localStorage.getItem("table"));
  if (table == 0){
    table = prompt("Generate table for (1-9)");
  } 
  else {
    table = getStudyTable();
  }
  let tableHead = "Times Table for "+table;
  let tableHeader = document.getElementById("tableHeader");
  tableHeader.innerHTML = tableHead;
  for (let factor = 2; factor < 10; factor++) {
    tableBody += table+" * "+factor+" = "+table*factor+"<br />";
  }
  let customMessage = document.getElementById("customMessage");
  customMessage.innerHTML = "We recommend you study the <span style=\"color:green;\">"+ table +" times table below</span> based on your previous errors.";
  let statBox = document.getElementById("stats");
  statBox.innerHTML = tableBody;
  localStorage.setItem("table", 0);
}

/* Get FactorList */
// Analyzes mistakes and returns the times table to study
function getStudyTable() {
  let mistakeList = JSON.parse(localStorage.getItem("mistakeList"));
  let factorList=[];
  for (let factor = 0; factor < mistakeList.length; factor++) {
    factorList.push(mistakeList[factor][0]);
    factorList.push(mistakeList[factor][1]);
  }
  factorList = factorList.sort();
  factorList = factorList.reverse();
  let studyTable = findFactor(factorList);
  return studyTable;
}

/* StudyList */
// returns the highst of factors with most duplicates from passed array 
function findFactor(array){
  let mostFrequent = 11; // most frequent item
  let counts = []; // array of counts of items in order
  let dupes = 0; // number of dupes so far
  let factor = 0; // value of an array item
  // Iterate over all items in array
  for(let item = 0; item < array.length; item++){
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
  localStorage.setItem("table", mostFrequent);
  return mostFrequent;
}