//Project8_String_Methods Assignment

//concat() Method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = " sentence";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function full_Sentence1() {
    var part_5 = "I ";
    var part_6 = "can ";
    var part_7 = "do ";
    var part_8 = " it";
    var whole_sentence = part_5.concat(part_6, part_7, part_8);
    document.getElementById("Concatenate1").innerHTML = whole_sentence;
}

//slice() Method
function slice_Method() {
    var sentence = "I have made this into a complete sentence";
    var section = sentence.slice(0,1);
    document.getElementById("Slice").innerHTML = section;
}

function slice_Method1() {
    var sentence1 = "I can do it";
    var section1 = sentence1.slice(2,5);
    document.getElementById("Slice1").innerHTML = section1;
}

//Number Methods
function string_Method() {
    var x = 123;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
	
}
//toPrecision() Methods
function precision_Method() {
    var y = 123.1234567890111213111415;
    document.getElementById("Precision").innerHTML = y.toPrecision(6); //method formats a number to a specified length.
}