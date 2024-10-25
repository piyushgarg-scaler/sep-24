const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.forEach((value, index) => console.log(value));

// forEach is HoF
// '(value) => console.log(value)' is callback

// Array.prototype = { forEach }
// arr.__proto__ = { forEach }

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (cb) {
    if (typeof cb !== "function") throw new Error("");

    const arr = this;

    for (let i = 0; i < arr.length; i++) {
      cb(arr[i], i);
    }
  };
}

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    if (typeof cb !== "function") throw new Error("");

    const arr = this;
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      let value = cb(arr[i], i);
      result.push(value);
    }

    return result;
  };
}

arr.myForEach((value, index) => console.log(`Custom`, value, "at", index));

let r = arr.myMap((value) => value * 10);
console.log("--> ", r);
