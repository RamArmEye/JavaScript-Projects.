// Project5_comparisons_type_coercion
/*
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

*/

  // 5 Double Equal Signs Assignment

//   function check1() {
//     var num1 = 101
//      var num2 =101 
//      document.getElementById("equal").innerHTML = (num1 == num2);
//  }
//  function check2() {
//     var num1 = 101
//     var num2 = 202
//     document.getElementById("notEqual").innerHTML = (num1 == num2);
    
// }

// 6 Triple Equal Signs Assignment


function check1() {
    const x = 10;
    const y = 10;
    const result = (x === y);
    document.getElementById("result1").textContent = result;
}

function check2() {
    const x = 10;
    const y = '20';
    const result = (x === y);
    document.getElementById("result2").textContent = result;
}

function check3() {
    const x = 10;
    const y = '10';
    const result = (x === y);
    document.getElementById("result3").textContent = result;
}

function check4() {
    const x = "Hi";
    const y = "Hello";
    const result = (x === y);
    document.getElementById("result4").textContent = result;
}
