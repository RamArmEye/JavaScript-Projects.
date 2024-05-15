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

// 6 Math.Random Assignment
function generateRandomNumber() {
    window.alert(Math.random() * 100);
}
*/





//Project3_math_operators Assignment

//  1 Subtraction Multiplication and Division
function subtraction() {   // Function for subtraction
	var subtraction = 5-2; // Subtraction operation
	document.getElementById("subtraction").innerHTML = "5-2 = " + subtraction;// Display result
	
}	
function multiplication() { // Function for multiplication
	var multiplication = 5*2; // Multiplication operation
	document.getElementById("multiplication").innerHTML = "5*2 = " + multiplication; // Display result

}
function division() { // Function for division
	var division = 100/2; // Division operation
	document.getElementById("division").innerHTML = "100/2 = " + division; // Display result
}



// 2 Multiple Operators 
function more_math() { // Function for complex math
    var result = (1 + 2) * 10 / 2 - 5; // Complex mathematical expression
    document.getElementById("math_result").innerHTML = 
        "1 plus 2, multiplied by 10, divided in half, and then subtracted by 5 equals " + result; // Display result
}




// 3 Modulus Operator 
function modulus_operator() { // Function for modulus operation
    var simple_math = 25 % 6; // Modulus operation
    document.getElementById("modulus_result").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math; // Display result
}



// 4 Unary Operator 
function negation_operator() { // Function for negation operation
	var x = 10; // Input value
	document.getElementById("negation_result").innerHTML = -x; // Display result
}



// 5 Increment and Decrement Operator 
function increment_operator() { // Function for increment operation
	var x = 5; // Input value
	x++; // Increment operation
	document.getElementById("increment_result").innerHTML = x; // Display result

}

function decrement_operator() { // Function for decrement operation
	var y = 5.25; // Input value
	y--; // Decrement operation
	document.getElementById("decrement_result").innerHTML = y; // Display result
}


// 6 Math.Random 
function generateRandomNumber() { // Function for generating random number
    var randomNumber = Math.floor(Math.random() * 100); // Generate random number between 0 and 99
    document.getElementById("random_result").innerText = randomNumber; // Display result
}

