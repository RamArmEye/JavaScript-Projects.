// Project10_loops_arrays
function Call_Loop() {
  var Digit = "";
  var X = 1;
  while (X < 11) {
    Digit += "<br>" + X;
    X++;
}
document.getElementById("Loop").innerHTML = Digit;
}