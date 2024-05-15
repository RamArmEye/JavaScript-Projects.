/*
//  1 Subtraction Multiplication and Division Assignment
function subtraction() {function called after button clicked
	var subtraction = 5-2; // variable called subtraction and equals 5-2
	document.getElementById("subtraction").innerHTML = "5-2 = " + subtraction;// output on the screen
	
}	
function multiplication() {
	var multiplication = 5*2;
	document.getElementById("multiplication").innerHTML = "5*2 = " + multiplication;

}
function division() {
	var division = 100/2;
	document.getElementById("division").innerHTML = "100/2 = " + division;
}

--

// 2 Multiple Operators Assignment
function more_math() {
    var result = (1 + 2) * 10 / 2 - 5;
    document.getElementById("math_result").innerHTML = 
        "1 plus 2, multiplied by 10, divided in half, and then subtracted by 5 equals " + result;
}

--


// 3 Modulus Operator Assignment
function modulus_operator() {
    var simple_math = 25 % 6;
    document.getElementById("modulus_result").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;
}
--


// 4 Unary Operator Assignment
function negation_operator() {
	var x = 10;
	document.getElementById("negation_result").innerHTML = -x;
}
--


// 5 Increment and Decrement Operator Assignment
function increment_operator() {
	var x = 5;
	x++; //++ counts one step up.
	document.getElementById("increment_result").innerHTML = x;

}

function decrement_operator() {
	var y = 5.25;
	y--; //reduce by discrete
	document.getElementById("decrement_result").innerHTML = y;
}
--
*/
// 6 Math.Random Assignment
function generateRandomNumber() {
    window.alert(Math.random() * 100);
}