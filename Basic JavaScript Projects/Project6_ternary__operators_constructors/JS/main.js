//Project6_ternary__operators_constructors
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