/* Multiplication Master Code */

function start(){
  setMode();
}

function questionMaker(){
  x = Math.floor(Math.random()*(highFactor-lowFactor+1))+lowFactor;
  y = Math.floor(Math.random()*(highFactor-lowFactor+1))+lowFactor;
}