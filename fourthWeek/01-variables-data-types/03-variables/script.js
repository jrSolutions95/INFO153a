//Ways to declare a variable
//var, let, const

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

let age = 30;

console.log(age);

//namingconvention
// - Only letters,numbers,underscores and dollarsigns
//cant start with a number
//camelcase lowwerUppercase

//reassigning variables
age = 31;

console.log(age);

let score;
score = 10;

console.log(score);

const x = 100;
x = 200; //this is not allowed is constant

//const s; this is not allowed

const arr = [1, 2, 3, 4, 5];

arr.push(6);

console.log(arr);

const person = { name: "John", age: 30 };

person.name = "Sara"; //this works

let a, b, c; //asign multiple variables
