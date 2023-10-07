# Fundamentals of Programming

The goal of these exercises is to help you understand the fundamental concepts in JavaScript and learn problem-solving skills.

The exercises cover the following topics:

1. Variables and data types
2. Operators
3. Conditions
4. Loops
5. Functions
6. Arrays
7. Objects
8. String Manipulation
   
At the end, there is a bonus question that tests your understanding of all the concepts covered in the exercises.

Here are some tips for completing the exercises:

- Start by breaking down the problem into smaller steps.
- If you get stuck on an exercise, try to break it down into smaller steps.
- Try to come up with a solution on your own. If you get stuck, don't be afraid to ask for help from a friend, teacher, or online resource.
- Once you have completed an exercise, test your solution thoroughly to make sure it works correctly.

I hope that these exercises help you to learn the fundamentals of coding and improve your problem-solving skills. Good luck!

## Variables and data types

Write a program that declares two variables, "name" and "age", and prints them to a console in a sentence that says "Hello, my name is [name] and I am [age] years old."

Here are some tips to get you started:

Think about how to represent "name" and "age" in the program. What data type should you use?
Think about how to print the values of the variables in a sentence. What operators and functions can you use?

[Solution](variables.js)

The curly braces are used to tell JavaScript to replace the text inside them with the value of the variables name and age. This is called string interpolation. The curly braces make the code more readable and easier to maintain.

## Operators

Create a program that prompts the user for two numbers and displays the result of the sum, subtraction, multiplication, and division of those numbers.

Here are some tips to help you solve the problem without giving you the answer:

Use variables to store the two numbers that the user enters.
Use operators to calculate the sum, subtraction, multiplication, and division of the two numbers.

[Solution](operators.js)

The require() function is used to import modules into a JavaScript program. The prompt-sync module provides a function for getting user input in Node.js.
Once the prompt variable has been assigned the value returned by the require('prompt-sync')() function, it can be used to get user input by calling the prompt() method.

## Conditions

Write a program that asks the user for their age and prints if they are of legal age or not.

Here are some specific tips that may be helpful for solving this problem:

Use a variable to store the user's age.
Find a way to compare the user's age to the legal age.

[Solution](conditions.js)

## Loops

Create a loop that prints all the numbers from 1 to 100.

Think about what a loop is and how it works. A loop is a programming construct that allows you to repeat a block of code until a certain condition is met.
Think about how you could use a loop to print all the numbers from 1 to 100. You could start by initializing a variable to 1. Then, you could use a loop to iterate from 1 to 100, printing each number to the console.
Test your solution with different values to make sure it works correctly. For example, you could try printing all the numbers from 1 to 10, and then try printing all the numbers from 1 to 1000.

[Solution](loops.js)

## Functions

Write a function that accepts two numbers as arguments and returns their sum.

A function is a block of code that can be reused throughout a program. Functions can take arguments and return values.
Think about how you could write a function that accepts two numbers as arguments and returns their sum. 
You would first need to define the function and specify its arguments and return value. Then, you would need to write the code inside the function to calculate the sum of the two numbers and return the result.

[Solution](functions.js)

## Arrays

Write a program that declares an array of your favorite fruits and prints each fruit in the list using a loop.

An array is a data structure that stores a collection of items. Arrays can be used to store any type of data, including numbers, strings, and objects.
Think about how you could declare an array of your favorite fruits. You would first need to decide what type of data you want to store in the array. In this case, you would want to store strings, since your favorite fruits are names of fruits. Then, you would need to create a new array and assign it a name. Finally, you would need to add the names of your favorite fruits to the array.

[Solution](arrays.js)

## Objects

Create an object that represents a book, with properties for title, author, and number of pages. Print each property to the console.

An object is a data structure that groups data and related methods. Objects can be used to represent real-world entities, such as books, people, or companies.
Think about how you could create an object that represents a book. You would first need to decide which properties the object should have. In this case, you would need properties for title, author, and number of pages. Then, you would need to create a new object and assign the properties to the object.

[Solution](objects.js)

## String Manipulation

Write a function that takes a string as input and returns the same string, but with the first letter of each word capitalized.

Think about how you could break the string into words. You can use a loop to iterate over the string and split the string into words using a separator, such as a space. 
How could you convert the first letter of each word to uppercase? You can use the toUpperCase() method to convert a letter to uppercase.
Think about how to join the words back together into a string. You can use the join() method to join the words together into a string using a separator, such as a space.

[Solution](string.js)

# Challange

Given a text, write a function that finds the longest word present in it.

Here are some tips to help you solve this Bonus Question without giving you the answer:

You can use a loop to iterate over the text and split the text into words using a separator, such as a space.
You can use the len() function to get the length of a string.
You can use a variable to store the longest word so far.

[Solution](challange.js)
