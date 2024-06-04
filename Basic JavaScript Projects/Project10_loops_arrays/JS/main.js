//Project10_Loops_Arrays Assignment

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


//Const Keyword Assignment


    // Function definition for constant_Function
    function constant_Function(){
        // Create a constant object 'car' with initial properties
        const car = {type: "petrol", brand: "Volvo", color: "black"}; // color defined "black" but bellow car.color "blue" so will be displayed "blue".
        
        // Modify the 'color' property of the 'car' object 
        car.color = "blue";
        
        // Add a new property 'price' to the 'car' object
        car.price = "£1";
        
        // Display the details of the 'car' object in the HTML element with id 'Constant'
        document.getElementById("Constant").innerHTML = "The cost of the " + car.color + " was " + car.price;
		
    }


//Let Keyword Assignment

//let
document.write("<br>") // Add a line break
var X = 82;
document.write(X); 
{
	let X = 33;
    document.write("<br>" + X);     
}
document.write("<br>" + X + " Variable declaration let: X=33 can not be accesed from outside the block"); //let can not be accesed from outside the block
  document.write("<br>")   
//var
document.write("<br>") // Add a line break
var Y = 82;
document.write(Y); 
{
	var Y = 33;
    document.write("<br>" + Y);     
}
document.write("<br>" + Y + "  Variable declaration: var Y=33 can  be accesed from outside the block"); //var  can  be accesed from outside the block


//Object Assignment
function car_assign() {
let car = {
  make:"Dodge ",
  model:"Viper ",
  year:"2021 ",
  color:"red ",
  description : function(){
    return "The car is a " + this.year + this.color + this.make + this.model;
  }

};
document.getElementById("Car_object").innerHTML = car.description();
}
