console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => console.log("Timeout inside Promise"), 0);
});

setTimeout(() => console.log("Timeout 1"), 0);

console.log("End");
