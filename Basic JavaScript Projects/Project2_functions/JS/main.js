//after clicking the button two variables become as single string
function clickButton() {   
// Variable 'Sent1'
    var Sent1 = "This is the beginning of the string";
// Variable 'Sent2' 
    var Sent2 = " and this is the end of the string";
    document.getElementById("concatenate").textContent = Sent1 + Sent2;
}