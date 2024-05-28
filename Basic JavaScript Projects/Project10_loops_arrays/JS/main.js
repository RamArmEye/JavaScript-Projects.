// Project10_loops_arrays

//Loop Assignment
function Call_Loop() {
  var Digit = "";
  var X = 1;
  while (X < 11) {
    Digit += "<br>" + X;
    X++;
}
document.getElementById("Loop").innerHTML = Digit;
}

//For Loop Assignment

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
  for (Y = 0; Y < Instruments.length; Y++) {
  Content += Instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = Content;
}

//document.getElementById().innerHTML method	
function array_Function(){
var Cat_Picture = [];
Cat_Picture [0] = "sleeping";
Cat_Picture [1] = "playing";
Cat_Picture [2] = "eating";
Cat_Picture [3] = "purring";
document.getElementById("Array").innerHTML = "In this picture, the cat is " +
  Cat_Picture[2] + ".";
}
