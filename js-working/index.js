const fs = require("fs");

console.log("Start");

function readFilePromise(filepath, encoding = "utf-8") {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, function (err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function writeFilePromise(filepath, data, encoding = "utf-8") {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, data, encoding, function (err) {
      if (err) return reject(err);
      resolve();
    });
  });
}

function unlinkPromise(filepath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filepath, function (err) {
      if (err) return reject(err);
      resolve();
    });
  });
}

function appendFilePromise(filepath, data) {
  return new Promise((resolve, reject) => {
    fs.appendFile(filepath, data, function (err) {
      if (err) return reject(err);
      resolve();
    });
  });
}

// Callback Hell
// fs.readFile("hello.txt", "utf-8", function (err, data) {
//   fs.writeFile("copy.txt", data, "utf-8", function (err) {
//     fs.unlink("hello.txt", function (err) {
//       fs.appendFile("copy.txt", "\nDONE", function (err) {
//         console.log("ALL DONE 😃");
//       });
//     });
//   });
// });

readFilePromise("hello.txt")
  .then((data) => writeFilePromise("copy.txt", data))
  .then(() => unlinkPromise("hello.txt"))
  .then(() => appendFilePromise("copy.txt", "\nDONE"))
  .catch((err) => console.log(err));

console.log("End");

/*
1. Read the hello.txt file
2. copy the contents of hello.txt file to copy.txt file
3. delete the hello.txt file
4. append "DONE" in copy.txt file
*/
