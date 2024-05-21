/*
//1 Project6_ternary__operators_constructors assignment
// Function to check if the rider is tall enough to ride
function Ride_Function() {   
    // Declare variables for height and riding 
    var Height, Can_ride;

    // Get the value from the input element with id 'Height'
    Height = document.getElementById("Height").value;

    // Use ternary operator to determine if the rider is tall enough
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";

    // Display the result in the paragraph element with id 'Ride'
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
*/
// 2 Coding Assignment
/*function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}
*/

// 3 New Keyword Assignment
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + 
    " manufactured in " + Emily.Vehicle_Year;
}