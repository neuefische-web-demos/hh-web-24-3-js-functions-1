// Function Declaration

function greet() {
  console.log("Hi friends!");
  console.log("Nice to be here.");
}

function printPersonalData() {
  const name = "Alex";
  const age = 24;
  console.log(name + " is " + age + " years old.");
}

// Function Call

greet();
printPersonalData();

greet();
greet();

// Parameters

function printLetter(name) {
  console.log("Hi " + name + ", hope you are fine. Love, Johnny");
}

printLetter("Alex"); // Argument
printLetter("Sylvie");

function printSum(first, second, third) {
  const sum = first + second + third; // number
  console.log("The sum of your numbers is: ", sum);
}

printSum(1, 2, 3);
printSum(4, 5, 6);

// Scope
// Function Scope & Global Scope

let globalAge = 24; // Variable in global scope

function myFunction() {
  const localAge = 36; // Variable in function scope
  console.log(localAge);
  console.log(globalAge);
}

myFunction();
globalAge = globalAge + 1;
myFunction();

console.log(localAge); // Error! Variable not available outside of function.
