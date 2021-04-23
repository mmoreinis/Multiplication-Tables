let statBox = document.getElementById("stats");
  let report = "";
  if (mistakes > 0) {
    report += "You had " + mistakes + " mistakes.<br /><br />";
    report += "You missed these: <br /><br />"
    var mistakeList = JSON.parse(localStorage.getItem("mistakeList"));
    count = mistakeList.length;
    for (var m = 0; m < count; m++) {
      var x = mistakeList[m][0];
      var y = mistakeList[m][1];
      report += x + " * " + y + " = " + x * y + "<br />";
    }
  }
  else {
    statBox.style.backgroundImage = "url('https://acegif.com/wp-content/gif/confetti-25.gif')";
    report = "<br /><br />You had ZERO mistakes! ROCK ON, Spartan!";
    statBox.style.height = "300px";
    statBox.style.width = "500px";
    statBox.style.fontSize = "24pt";
    statBox.style.color = "black";
    statBox.style.backgroundColor = "white";
  }
  statBox.innerHTML = report;