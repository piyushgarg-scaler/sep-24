async function handlePromise() {
  await Promise.resolve(1);
  console.log("promise resolve using async await");
}

Promise.resolve(1).then(function () {
  console.log("promise resolve");
});

handlePromise();
