# JavaScript Core Concepts – Detailed Notes

---

## 1️⃣ Closures

### Definition

> **When a child function remembers and uses variables of its parent function, even after the parent function has finished executing, it is called a Closure.**

In simple words:

* Function + its lexical scope = **Closure**

---

### Example

```js
function fn(){
    var a = 10;

    function abcd(){
        console.log(a);
    }

    a = 40;
    return abcd;
}

let res = fn();
res();
```

### Output

```
40
```

### Explanation

* `fn()` creates variable `a`
* `abcd()` uses `a`
* Even after `fn()` finishes, `abcd()` still remembers `a`
* Closure stores **reference**, not copy

---

### Real-Life Example

Think of closure like:

> A child who remembers their home address even after leaving the house.

---

## 2️⃣ Function Parameters, Arguments & Default Parameters

### Parameters vs Arguments

```js
function add(a, b) { // parameters
  return a + b;
}

add(2, 3); // arguments
```

* **Parameters** → variables defined in function
* **Arguments** → values passed during function call

---

### Default Parameters

```js
function greet(name = "Guest"){
    console.log("Hello", name);
}

greet();        // Hello Guest
greet("Aman"); // Hello Aman
```

Default value is used when no argument is passed.

---

## 3️⃣ Pure Functions

### Definition

> A function is pure if:

* It gives the same output for the same input
* It does not depend on or modify external variables

---

### ❌ Impure Function

```js
let count = 2;

function add(){
    console.log(count);
}
```

Why impure?

* Depends on external variable
* Output can change anytime

---

### ✅ Pure Function

```js
function add(a, b){
    return a + b;
}
```

Advantages:

* Predictable
* Easy to test
* Used in React & Redux

---

## 4️⃣ Rest & Spread Operator (`...`)

### 🔹 Spread Operator (Copy / Expand)

```js
let arr = [1,2,3,4,5];
let arr2 = [...arr];

arr2.push(6);

console.log(arr);  // [1,2,3,4,5]
console.log(arr2); // [1,2,3,4,5,6]
```

Why spread?

* Creates a new copy
* Avoids reference issues

---

### Spread with Objects

```js
let user = { name: "Ram", age: 20 };
let newUser = { ...user, city: "Ayodhya" };
```

---

### 🔹 Rest Operator (Accept multiple values)

```js
function test(a, b, ...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
}

test(1,2,3,4,5,6);
```

Output:

```
1
2
[3,4,5,6]
```

Rules:

* Rest must be the **last parameter**

---

## 5️⃣ Destructuring

### 🔹 Array Destructuring

```js
let arr = [10, 20, 30];
let [a, b, c] = arr;

console.log(a); // 10
```

---

### 🔹 Object Destructuring

```js
let user = {
  name: "Aman",
  age: 21
};

let { name, age } = user;
```

### Rename variables

```js
let { name: username } = user;
```

---

## 6️⃣ Event Loop (Asynchronous JavaScript)

### Code Example

```js
console.log(1);

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve("54").then(console.log);

console.log(2);
```

---

### Execution Flow

1. `console.log(1)` → Call Stack
2. `setTimeout` → Web API → Callback Queue
3. `Promise.resolve` → Microtask Queue
4. `console.log(2)` → Call Stack
5. Microtask Queue executes first
6. Callback Queue executes later

---

### Output

```
1
2
54
timeout
```

---

### Priority Order

1. Call Stack
2. Microtask Queue (Promises)
3. Callback Queue (setTimeout)

---

## 🔁 Quick Revision Table

| Concept            | Meaning                                   |
| ------------------ | ----------------------------------------- |
| Closure            | Child function remembers parent variables |
| Default Parameters | Fallback values                           |
| Pure Function      | Same input → same output                  |
| Spread             | Copy / expand values                      |
| Rest               | Collect multiple arguments                |
| Destructuring      | Extract values easily                     |
| Event Loop         | Manages async execution                   |

---

 