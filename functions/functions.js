// function expression
// must be declared before use because it is not hoisted to the top
const speak = function(name) {
    console.log(`good day ${name}`);
}

greet();
speak('mario');

// function declaration
// can be declared anywhere because of hoisting to the top
function greet() {
    console.log('hello there');
}