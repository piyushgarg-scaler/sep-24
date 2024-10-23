const obj = {
  fname: "Piyush",
  sayName: function (a, b, c, d) {
    console.log(this.fname, { a, b, c, d });
  },
};

const obj2 = {
  fname: "Pradeep v2",
  __nik__: true,
};

Function.prototype.myBind = function (context, ...initalArgs) {
  if (!context) throw new Error("Context must be an object");
  if (typeof context !== "object") throw new Error("Context must be an object");

  const orgFunction = this;
  context.__nik__ = orgFunction;

  return function (...args) {
    context.__nik__(...initalArgs, ...args);
  };
};

Function.prototype.myApply = function (context, params = []) {
  if (!context) throw new Error("Context must be an object");
  if (typeof context !== "object") throw new Error("Context must be an object");

  const orgFunction = this;
  context.__nik__ = orgFunction;

  const value = context.__nik__(...params);
  delete context.__nik__; // Cleanup
  return value;
};

Function.prototype.myCall = function (context, ...params) {
  if (!context) throw new Error("Context must be an object");
  if (typeof context !== "object") throw new Error("Context must be an object");

  const orgFunction = this;
  context.__nik__ = orgFunction;

  const value = context.__nik__(...params);
  delete context.__nik__; // Cleanup
  return value;
};

// Not Clear
// 50++ -> Your homework is to revist
// full++ -> Your homework is a bug fix

// Homework: Call by value and Call by refrence

// Understand Bind
// const fn = obj.sayName.bind(obj2, 1)
// fn(2, 3, 4)
// fn(2, 3, 4)
// fn(2, 3, 4)
// fn(2, 3, 4)
// fn(2, 3, 4)
// fn(2, 3, 4)

// Understand Apply
// obj.sayName.myApply(obj2, [14, 25, 37, "abc"]); // Called here only

/**
 * 1. .bind is a function - DONE
 * 2. .bind = function (context, ...initalArgs)  - DONE
 * 3. .bind returns a brand new function  - DONE
 * 4. upon calling the returned function it
 *    executes the orig fn with new context
 * 5. on call of new fn can also take some args  - DONE
 */

console.log("obj2 Before", obj2);
obj.sayName.myCall(obj2);

// Research (I don't need hack answere) (X - 34 hacky ans....) Solid Solution
// There is a key conflict? (Bug)
// Avoid Key Conflicting

console.log("obj2 After", obj2);
