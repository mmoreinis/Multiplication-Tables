function mistakesReport(){
  var mistakeList = JSON.parse(localStorage.getItem("mistakeList"));
  count = mistakeList.length;
  var report = "";
  for (var m = 0;m < count; m++){
    var x = mistakeList[m][0];
    var y = mistakeList[m][1];
    report+=x+" * "+ y + " = " + x*y+"<br />";
  }
  var statBox = document.getElementById("stats");
  statBox.innerHTML = report;
}

function tablesButton(){
  var oldTable = parseInt(localStorage.getItem("oldTable"));
  if (oldTable == 0) {
    localStorage.setItem("oldTable", "3");
  }
  window.location.href = "../pages/tables.html";
}

