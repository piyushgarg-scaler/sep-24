// function test() {
//   let a = 10;

//   // Closure Function
//   return function inner() {
//     console.log(`Value of a inside inner is`, a);
//     a += 1;
//   };
// }

/**
 * scopeA = { a: 12 }
 * scopeB = { a: 11 }
 */

// const returnedFunction = test(); // scopeA

// returnedFunction();

// const secondReturendFn = test(); // scopeB

// returnedFunction();
// secondReturendFn();

// 10
// 11
// 10

/**
 * 1. Closure functions in JS is a technique - Scoping
 * 2. Clousure functions preseve the variables from outer scope
 */

// function outerFunction() {
//   let count = 0;

//   function innerFunction() {
//     count++;
//     return count;
//   }

//   return innerFunction;
// }

// const innerFuncA = outerFunction();
// const innerFuncB = outerFunction();

// console.log(innerFuncA());
// console.log(outerFunction()());
// console.log(innerFuncB());
// console.log(innerFuncA());
// console.log(innerFuncB());
// console.log(innerFuncB());
// console.log(outerFunction()());

// function createCounter(init, delta) {
//   function count() {
//     init = init + delta;
//     return init;
//   }

//   return count;
// }

// let c1 = createCounter(10, 5);
// let c2 = createCounter(5, 2);

// console.log(c1());
// console.log(c2());
// console.log(c1());
// console.log(c2());

let iamINGEC = 200;

function getFirstName(firstName) {
  console.log("I have got your first Name");

  return function getLastName(lastName) {
    console.log("I have got Your last Name");

    return function greeter() {
      console.log(`Hi I am ${firstName} ${lastName}`);
      console.log("Hi GEC", iamINGEC);
    };
  };
}

getFirstName("Piyush")("Garg")();

// Application of Closures
