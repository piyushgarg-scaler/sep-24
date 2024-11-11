// Object Descriptors

const obj = {
  fname: "Piyush",
};

// Define a new property
// obj.lname = "Garg";
// obj.age = "Garg";
// obj.xyz = "Garg";

// 1. defineProperty
// Object.defineProperty(obj, "lname", {
//   value: 1,
//   enumerable: true,
//   writable: false,
//   configurable: false,
// });

// Object.defineProperty(obj, "xyz", {
//   value: "Hahaha",
//   enumerable: true,
// });

// 2. freeze
// Object.freeze(obj);

// 3. seal
// Object.seal(obj);
// 4. preventExtensions
Object.preventExtensions(obj);

obj.fname = "Hacked ABC";
obj.lname = "Garg";

// delete obj.fname;

console.log(obj);

for (key in obj) {
  console.log(`${key} = ${obj[key]}`);
}
