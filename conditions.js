//Declaring the prompt variable 
let prompt = require('prompt-sync')();

//Asking for the users age
let userAge = Number(prompt("How old are you?"));

//Using an if-else statement to print the message according to the age typed
if (userAge >= 18) {
    console.log("You are of legal age.");
} else {
    console.log("You are not of legal age.");
}