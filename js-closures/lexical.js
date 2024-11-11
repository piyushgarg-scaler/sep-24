// Lexical Scope

// const age = 30;

// function test() {
//   console.log(`The value of age inside func test is ${age}`);
// }

// test();

const varName = 10;

function b() {
  console.log("in b", varName);
}

function fn() {
  const varName = 20;
  b(); // calling
  console.log(`in fn function`, varName);
}

fn();

/**
 * This code defines two functions, b and fn, and a global variable varName with a value of 10Inside fn, a local variable varName with a value of 20 shadows the global one. When fn is called, it logs the local varName, which is 20, then calls b. b logs the global varName, which is 10.
 */

// Functions - function Declare | Defination() {} | Calling()

// A lexical scope allows a function scope to access variables in the outer scope.
// The outer scope is deteremined wrt to function definition only were we have defined the function code in js file
