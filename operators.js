//Declaring the prompt variable 
let prompt = require('prompt-sync')();

// Prompt the user for two numbers
let num1 = Number(prompt("Enter a number:"));
let num2 = Number(prompt("Enter another number:"));

// Calculate the sum, subtraction, multiplication, and division of the two numbers
console.log(`The sum is: ${num1 + num2}`);
console.log(`The subtraction is: ${num1 - num2}`);
console.log(`The multiplication is: ${num1 * num2}`);
console.log(`The division is: ${num1 / num2}`);