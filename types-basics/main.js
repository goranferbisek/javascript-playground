// NUMBER

let age = 32;
let year = 2019;
let pi = 3.14;

console.log(age, year, pi); // accepts multiple parameters

age = 60;

console.log(age);

const full = 100;
// full = 50;   Uncaught TypeError: Assignment to constant variable

// STRING
let firstName = "Jon";
let lastName = "Doe";
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);


let boolean = false;
let nullVar = null;
let undefinedVar = undefined; // automatically set by the browser
let objectVar = Object();  // Arrays, Dates ...
let symbolVar = Symbol();

// primitive values
console.log('------------------- primitive types-------------');

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreTwo = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values
console.log('------------------- reference types-------------');
let userOne = { name: "John", age: 32};
let userTwo = userOne;

console.log(userOne, userTwo);


userOne.age = 40;
console.log(userOne, userTwo);
console.log('both pointers are pointing to the same object')