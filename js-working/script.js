console.log("Start");

setTimeout(() => {
  console.log("Hi A");
}, 0);

setTimeout(() => {
  console.log("Hi B");
}, 0);

Promise.resolve().then(() => console.log("Promise Resolved A"));
Promise.resolve().then(() => console.log("Promise Resolved B"));

setTimeout(() => {
  console.log("Hi C");
}, 0);

Promise.resolve().then(() => console.log("Promise Resolved C"));

console.log("END");
