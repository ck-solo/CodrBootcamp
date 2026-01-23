# JavaScript Array Methods & Async Concepts – Complete Explanation with Code

---

## 1️⃣ Array Methods (Most Important for Interviews)

We use array methods to **loop, transform, filter, or calculate values** from arrays in a clean way.

---

## 🔹 forEach()

### What it does

* Loops through each element
* **Does NOT return anything**
* Used when you just want to perform an action (print, update DOM, etc.)

### Syntax

```js
arr.forEach((value, index, array) => {
  // logic
});
```

### Example

```js
let arr = [1, 2, 3, 4, 5];

let res = arr.forEach((val, ind) => {
  return val * 2;
});

console.log(res); // undefined
```

### Why undefined?

* `forEach` ignores `return`
* It always returns `undefined`

✅ Use when: **no need of new array**

---

## 🔹 map()

### What it does

* Creates a **new array**
* Transforms each element
* Length remains same

### Syntax

```js
arr.map((value, index, array) => newValue);
```

### Example

```js
let arr = [1, 2, 3, 4, 5];

let res = arr.map((val) => {
  return val * 2;
});

console.log(res); // [2, 4, 6, 8, 10]
```

✅ Use when: **modify each value**

---

## 🔹 filter()

### What it does

* Returns a new array
* Only keeps values that satisfy condition

### Example

```js
let arr = [1, 2, 3, 4, 5];

let res = arr.filter((val) => {
  return val % 2 === 0;
});

console.log(res); // [2, 4]
```

✅ Use when: **select some elements**

---

## 🔹 find()

### What it does

* Returns **first matching value**
* Stops after finding it

### Example

```js
let arr = [1, 2, 3, 4, 3];

let res = arr.find((val) => {
  return val === 3;
});

console.log(res); // 3
```

❌ If not found → `undefined`

---

## 🔹 reduce()

### What it does

* Reduces array into **single value**
* Uses accumulator

### Syntax

```js
arr.reduce((accumulator, currentValue, index, array) => {
  return updatedAcc;
}, initialValue);
```

### Example (Sum)

```js
let arr = [1, 2, 3, 4, 5];

let res = arr.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(res); // 15
```

✅ Use when: sum, product, grouping, counting

---

## 🔹 some()

### What it does

* Returns `true` if **ANY one** element matches condition

### Example

```js
let arr = [1, 2, 3, 4, 5];

let res = arr.some((val) => {
  return val === 3;
});

console.log(res); // true
```

---

## 🔹 every()

### What it does

* Returns `true` only if **ALL elements** match condition

### Example

```js
let arr = [1, 2, 3, 4, 5];

let res = arr.every((val) => {
  return val > 0;
});

console.log(res); // true
```

---

## 2️⃣ for...in vs for...of

### 🔹 for...in (Indexes)

```js
let arr = [10, 20, 30];

for (let i in arr) {
  console.log(i);
}
```

Output:

```
0
1
2
```

⚠️ Used mainly with objects

---

### 🔹 for...of (Values)

```js
let arr = [10, 20, 30];

for (let val of arr) {
  console.log(val);
}
```

Output:

```
10
20
30
```

✅ Best for arrays

---

## 3️⃣ Promises

### Promise States

* pending
* fulfilled
* rejected

### Example

```js
let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data received");
  } else {
    reject("Error occurred");
  }
});

promise
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
```

---

## 4️⃣ fetch() API (Correct Way)

### Fixed Version of Your Code

```js
fetch(userapi)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

### Why fix?

* `.json()` also returns a promise
* Must be chained properly

---

## 5️⃣ async / await

### Rules

* `await` only works inside `async` function
* Makes async code look synchronous

### Example

```js
async function getData() {
  try {
    let res = await fetch(userapi);
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getData();
```

---

## 6️⃣ Callback Hell

### What is it?

* Too many nested callbacks
* Hard to read and debug

```js
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      console.log("Hell");
    }, 1000);
  }, 1000);
}, 1000);
```

✅ Solution: Promises / async-await

---

## 7️⃣ call, apply, bind

### call()

```js
fn.call(obj, arg1, arg2);
```

### apply()

```js
fn.apply(obj, [arg1, arg2]);
```

### bind()

```js
let newFn = fn.bind(obj);
newFn();
```

---

## 🔁 Final Quick Summary

| Method  | Returns      | Use Case    |
| ------- | ------------ | ----------- |
| forEach | undefined    | Just loop   |
| map     | New Array    | Transform   |
| filter  | New Array    | Select      |
| find    | Value        | First match |
| reduce  | Single value | Calculate   |
| some    | Boolean      | Any match   |
| every   | Boolean      | All match   |
 
