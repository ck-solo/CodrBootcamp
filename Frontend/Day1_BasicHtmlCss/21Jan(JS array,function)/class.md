if else

falsy values "" 0 false null undefined NaN docuement.all
if(condition){
    console.log("true");
    else{

console.log("false");
    }
}


switch
switch(condition){
case 1:
    console.log("one");
break;
case 2:
    console.log("two");
break;
default:
    console.log("default");
}


loops

entry control
start condition, end condition,change condition

for loop
for(let i=0; i<5; i++){
    console.log(i);
}
post increment


exit control



 while loop 
 let i = 1;
while(i<5){
    console.log(i);
    i++;
}

exit control
do{
    console.log(i);
    i++;
}while(i<20);




Arrays

arr.push(4)
arr.pop()
arr.shift()
arr.unshift()
arr.splice()
arr.slice()
reverse 

arr.sorting concept

let res = arr.sort((a,b) = a-b);
ascending

let res = arr.sort((a,b) =>{
    return a-b;
});
descending


let res = arr.sort((a,b) =>{
    console.log(a,b);
    return a-b;
});
console.log(res);

let res = arr.reverse();
console.log(res);

let res = arr.concat(arr);
console.log(res);

let res = arr.join();
console.log(res);

let res = arr.indexOf(4);
console.log(res);

let res = arr.lastIndexOf(4);
console.log(res);

let res = arr.includes(4);
console.log(res);



functions
global scope

function statement
greet(); hello answer

function greet(){
    console.log("hello");
}

function expression
greet(); ab not define

var greet = function(){
    console.log("hello");
};



fat arrow function

let ab = () => {
   return 40
};

console.log(ab());
output=> 40


higher order function
1. function that return function



closures
1. function that use variable outside of its parent function scope

let ab =()=>{
    let a = 10;
    return () =>{
        console.log(a);
    }
}

ab()();
output=>10








# 📘 JavaScript Class Notes – Control Flow, Arrays & Functions

> These notes are written in **simple, deep, human-friendly language**, exactly aligned with what your instructor taught in class.
> Perfect for **Notion, GitHub, revision, and interviews**.

---

## 🔀 Conditional Statements (if / else)

### What is if–else?

`if-else` is used to **make decisions** in JavaScript. It checks a condition and runs code based on whether the condition is `true` or `false`.

### Syntax

```js
if (condition) {
  console.log("true");
} else {
  console.log("false");
}
```

---

### 🧠 Falsy Values in JavaScript

These values always become `false` when checked inside an `if` condition:

* `""` (empty string)
* `0`
* `false`
* `null`
* `undefined`
* `NaN`
* `document.all` (special case)

Example:

```js
if ("") {
  console.log("true");
} else {
  console.log("false"); // this will run
}
```

👉 Everything except falsy values is **truthy**.

---

## 🔁 Switch Statement

### When to Use switch?

Used when you have **multiple fixed values** to compare against one condition.

### Syntax

```js
switch (condition) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  default:
    console.log("default");
}
```

### Important Points

* `break` stops execution
* Without `break`, code falls through
* `default` runs if no case matches

---

## 🔂 Loops in JavaScript

Loops are used to **repeat code**.

### Loop Components

1. Start condition
2. End condition
3. Change condition (increment / decrement)

---

## ▶️ Entry-Controlled Loops

Condition is checked **before** execution.

### for Loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

* `i++` → post-increment
* Loop runs while condition is true

---

### while Loop

```js
let i = 1;
while (i < 5) {
  console.log(i);
  i++;
}
```

---

## ⏹ Exit-Controlled Loop

Condition is checked **after** execution.

### do–while Loop

```js
let i = 10;
do {
  console.log(i);
  i++;
} while (i < 20);
```

👉 Runs at least **one time**, even if condition is false.

---

## 📦 Arrays in JavaScript

Arrays store **multiple values in a single variable**.

```js
let arr = [1, 2, 3, 4];
```

---

### Common Array Methods

#### push() – add at end

```js
arr.push(5);
```

#### pop() – remove from end

```js
arr.pop();
```

#### shift() – remove from start

```js
arr.shift();
```

#### unshift() – add at start

```js
arr.unshift(0);
```

---

### slice() vs splice()

#### slice() (does NOT change original array)

```js
arr.slice(1, 3);
```

#### splice() (changes original array)

```js
arr.splice(1, 2);
```

---

### Sorting Arrays

#### Ascending Order

```js
let res = arr.sort((a, b) => a - b);
```

#### Descending Order

```js
let res = arr.sort((a, b) => b - a);
```

#### Understanding sort working

```js
arr.sort((a, b) => {
  console.log(a, b);
  return a - b;
});
```

---

### Other Important Methods

```js
arr.reverse();
arr.concat(arr);
arr.join();
arr.indexOf(4);
arr.lastIndexOf(4);
arr.includes(4);
```

---

## 🧩 Functions in JavaScript

A function is a **block of reusable code** that runs when called.

---

## 🌍 Global Scope

Variables declared outside functions are **global** and accessible everywhere.

```js
let x = 10;
function test() {
  console.log(x);
}
```

---

## 🟢 Function Statement (Hoisted)

```js
greet(); // works

function greet() {
  console.log("hello");
}
```

---

## 🔴 Function Expression (Not Hoisted)

```js
greet(); // ❌ error

var greet = function () {
  console.log("hello");
};
```

---

## ⚡ Arrow (Fat Arrow) Function

```js
let ab = () => {
  return 40;
};

console.log(ab()); // 40
```

---

## 🔁 Higher Order Functions

A **higher order function** is a function that:

* takes another function as argument OR
* returns a function

```js
function outer() {
  return function inner() {
    console.log("inner function");
  };
}
```

---

## 🔐 Closures

A closure is created when a function **remembers variables from its outer scope**, even after the outer function has finished execution.

### Example

```js
let ab = () => {
  let a = 10;
  return () => {
    console.log(a);
  };
};

ab()(); // 10
```

### Why Closures Are Important

* Data hiding
* Private variables
* Used in real-world apps

---

## ✅ Final Summary

✔ Decision making with if–else & switch
✔ Entry & exit controlled loops
✔ Deep understanding of array methods
✔ Function types & execution behavior
✔ Higher order functions & closures

--- 
