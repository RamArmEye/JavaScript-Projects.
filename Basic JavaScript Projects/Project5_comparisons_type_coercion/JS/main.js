/*
// Project5_comparisons_type_coercion

// 1 Type Of Operator and Coercion Assignment
function dataType() {
    // Define a variable
    var myVariable = 42;
    
    // Use document.write() method to display the data type
    document.write("Data type of myVariable is: "  +  typeof myVariable);
    document.write("10" + myVariable)
}


// 2 Infinity Assignment
function posInfinity() {
    var pInfinity = 23469629  // enter number to test infinity 
    document.getElementById("Infinity").innerHTML = pInfinity;
 }
 function negInfinity() {
    var pInfinity = (-2E310) 
    document.getElementById("nInfinity").innerHTML = pInfinity;
 }



 // 3 and 4  Boolean Assignment
 function True() {
    var num1 = 5
    var num2 = 7
     document.getElementById("less").innerHTML = (num1 < num2);
 }
 function False() {
    var num1 = 5
    var num2 = 7
    document.getElementById("more").innerHTML = (num1 > num2);
    console.log(2 + 2);
}



  //5 Double Equal Signs Assignment

  function check1() {
    var num1 = 101
     var num2 =101 
     document.getElementById("equal").innerHTML = (num1 == num2);
 }
 function check2() {
    var num1 = 101
    var num2 = 202
    document.getElementById("notEqual").innerHTML = (num1 == num2);
    
}

//6 Triple Equal Signs Assignment


function check1() { //Return true by ensuring to match the data type and value
    const x = 10;
    const y = 10;
    const result = (x === y);
    document.getElementById("result1").textContent = result;
}

function check2() { //Return false by writing a different data type and different value.
    const x = 10;
    const y = '20';
    const result = (x === y);
    document.getElementById("result2").textContent = result;
}

function check3() { //Return false by writing a different data type but the same value for both.
    const x = 10;
    const y = '10';
    const result = (x === y);
    document.getElementById("result3").textContent = result;
}

function check4() { //Return false by writing the same data type but a different value for both.
    const x = "Hi";
    const y = "Hello";
    const result = (x === y);
    document.getElementById("result4").textContent = result;
}

//7 And Operator Assignment

function check1() {
    // The logical operation for the first check
    let result1 = 5 > 10 || 10 > 4;
    document.getElementById('result1').innerHTML =result1; 
}
function check2() {
    // The logical operation for the second check
    let result2 = 5 > 10 || 10 > 20;
    document.getElementById('result2').innerHTML = 
          result2 + '.The logical OR (||) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true';
}
	
//8 Not Operator Assignment
function not_Function1() {
    // The logical operation for the first check
    let result1 = !(20 > 10);
    document.getElementById('result1').innerHTML =result1; 
}
function not_Function2() {
    // The logical operation for the second check
    let result2 = !(5 > 10);
    document.getElementById('result2').innerHTML = 
          result2 + '.The logical NOT (!) (logical complement, negation) operator takes truth to falsity and vice versa';
}
*/

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Project5_Comparisons_Type_Coercion Assignment
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// 1 Type Of Operator and Coercion Assignment
function dataType() {
    // Define a variable
    var myVariable = 42;
    
    // Use document.write() method to display the data type
    document.write("Data type of my Variable is: "  +  typeof myVariable);
    document.write("10" + myVariable)
	
}


// 2 Infinity Assignment
function posInfinity() {
    var pInfinity = 23469629  // enter number to test infinity 
    document.getElementById("Infinity").innerHTML = pInfinity;
 }
 function negInfinity() {
    var pInfinity = (-2E310) 
    document.getElementById("nInfinity").innerHTML = pInfinity;
 }



 // 3 and 4  Boolean Assignment
 function True() {
    var num1 = 5
    var num2 = 7
     document.getElementById("less").innerHTML = (num1 < num2);
 }
 function False() {
    var num3 = 5
    var num4 = 7
    document.getElementById("more").innerHTML = (num3 > num4);
    console.log(2 + 2);
}



  //5 Double Equal Signs Assignment

  function check1() {
    var num5 = 101
     var num6 =101 
     document.getElementById("equal").innerHTML = (num5 == num6);
 }
 function check2() {
    var num7 = 101
    var num8 = 202
    document.getElementById("notEqual").innerHTML = (num7 == num8);
    
}

//6 Triple Equal Signs Assignment


function check3() { //Return true by ensuring to match the data type and value
    const x = 10;
    const y = 10;
    const result = (x === y);
    document.getElementById("result1").textContent = result;
}

function check4() { //Return false by writing a different data type and different value.
    const x1 = 10;
    const y1 = '20';
    const result = (x1 === y1);
    document.getElementById("result2").textContent = result;
}

function check5() { //Return false by writing a different data type but the same value for both.
    const x2 = 10;
    const y2 = '10';
    const result = (x2 === y2);
    document.getElementById("result3").textContent = result;
}

function check6() { //Return false by writing the same data type but a different value for both.
    const x3 = "Hi";
    const y3 = "Hello";
    const result = (x3 === y3);
    document.getElementById("result4").textContent = result;
}

//7 And Operator Assignment

function check7() {
    // The logical operation for the first check
    let result1 = 5 > 10 || 10 > 4;
    document.getElementById('result5').innerHTML =result1; 
}
function check8() {
    // The logical operation for the second check
    let result2 = 5 > 10 || 10 > 20;
    document.getElementById('result6').innerHTML = 
          result2 + '.The logical OR (||) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true';
}
	
//8 Not Operator Assignment
function not_Function1() {
    // The logical operation for the first check
    let result1 = !(20 > 10);
    document.getElementById('result7').innerHTML =result1; 
}
function not_Function2() {
    // The logical operation for the second check
    let result2 = !(5 > 10);
    document.getElementById('result8').innerHTML = 
          result2 + '.The logical NOT (!) (logical complement, negation) operator takes truth to falsity and vice versa';
}
	