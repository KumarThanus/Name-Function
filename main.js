var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var display = document.getElementById("display");

function clear() {
    firstName.value = "";
    lastName.value = "";
   
    
}

function play() {
    display.innerHTML = firstName.value + " " + lastName.value;
    clear();
}


