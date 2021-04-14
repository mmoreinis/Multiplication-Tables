function mistakes(){
  var mistakes = [[7,2],[7,5],[8,6]];
  count = mistakes.length;
  var report = "";
  for (var m = 0;m < count; m++){
    var x = mistakes[m][0];
    var y = mistakes[m][1];
    report+=x+" * "+ y + " = " + x*y+"<br />";
  }
  var statBox = document.getElementById("stats");
  statBox.innerHTML = report;
}