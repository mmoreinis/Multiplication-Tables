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
    table = storedTable;
  }
  var tableHead = "Times Table for "+table;
  var tableHeader = document.getElementById("tableHeader");
  tableHeader.innerHTML = tableHead;
  for (var factor = 2; factor < 10; factor++) {
    tableBody += table+" * "+factor+" = "+table*factor+"<br />";
  }
  var statBox = document.getElementById("stats");
  statBox.innerHTML = tableBody;
  localStorage.setItem("oldTable", 0);
}