const cache = new Map();

function add(a, b) {
  return a + b;
}

function power(x, y) {
  let result = 1;

  for (let i = 1; i <= y; i++) {
    result = result * x;
  }

  return result;
}

function createCachedVersion(fn) {
  const cache = new Map();

  return function (...args) {
    const cacheKey = `${args.join(":")}`;
    if (cache.has(cacheKey)) {
      console.log(`Cache Hit`);
      return cache.get(cacheKey);
    }

    const value = fn(...args);
    console.log(`Cache Miss`);
    cache.set(cacheKey, value);
    return value;
  };
}

const cachedPowerFn = createCachedVersion(power);
const cachedAddFn = createCachedVersion(add);

console.log(cachedAddFn(2, 5));
console.log(cachedAddFn(2, 5));
console.log(cachedAddFn(2, 5));
console.log(cachedAddFn(2, 5));
console.log(cachedAddFn(2, 5));
console.log(cachedAddFn(2, 5));
