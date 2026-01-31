Function

1. function decelaration
   sayhello() // hey  
   technially hoisted
   not showing error beause function call itself completely not store in varible
   function sayHello(){
   console.log(hey)
   }

2. Function expression
   logically hoisted
   a() // cannot access a before initalizaation
   let a = function(){
   console.log("Iam hey")
   }
   basically technicall and logically hoisted are two major difference things that come from temporal dead zone conecpt in which the varibles are hoisted but only var not let const so logically it is hosited but techniaclly not

3. Arrow function
   let fun1 = () =>{

}

return console diference is that return gaves you somthing and console doesn't return anything back
return me kuch laake dena hota hai
console me kuch laake dena nhi hota

Objects
const me ={
name:"shamm",
age:"23",

}

const me2 = me
console.log(me2 === me) output // true
reference value

const me3 ={
name:"shamm",
age:"23",
}
pass by value

console.log(me === me3) output // true

callback funs
hof funs

Promises => is a object that predict the future value
pending fullfilled reject

settimeout webapi
api stand for external webapi hai

event loop

<!-- *******************************************above class concept********************************************** -->
# JavaScript Functions, Objects, and Asynchronous Concepts

## 1. Functions in JavaScript

### 1.1 Function Declaration

**Definition:**  
A function declaration defines a function with a specific name. It is **technically hoisted**, meaning it can be called **before its definition**.

**Syntax:**
```javascript
function sayHello() {
    console.log("Hey");
}
Example:

sayHello(); // Output: "Hey"

function sayHello() {
    console.log("Hey");
}
Key Points:

Function declarations are fully hoisted, so you can call them before the function is defined in the code.

They are stored in memory during the compilation phase.

Hoisting works differently for function expressions.

1.2 Function Expression
Definition:
A function expression assigns a function to a variable. These are logically hoisted, but not accessible before initialization due to the Temporal Dead Zone (TDZ) with let and const.

Syntax:

let a = function() {
    console.log("I am Hey");
};
Example:

a(); // Error: Cannot access 'a' before initialization

let a = function() {
    console.log("I am Hey");
};
Key Points:

Variables declared with let or const are hoisted but cannot be used before initialization — this is the Temporal Dead Zone (TDZ).

Only var variables are technically hoisted and accessible with undefined before initialization.

Function expressions are not fully hoisted, unlike function declarations.

1.3 Arrow Functions
Definition:
Arrow functions are a concise way to write functions. They do not have their own this, arguments, or prototype.

Syntax:

let fun1 = () => {
    console.log("Hello from arrow function");
};
Key Points:

Arrow functions are always expressions.

Cannot be called before definition if declared with let or const.

return vs console.log:

return gives a value back.

console.log only prints something; it does not return anything.

Example:

let add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
2. Objects in JavaScript
2.1 Objects and Reference Types
const me = {
    name: "Shamm",
    age: 23
};

const me2 = me;
console.log(me2 === me); // true (same reference)
Objects are reference types, meaning they store memory addresses, not values.

If two objects point to the same memory, comparison (===) returns true.

2.2 Pass by Value vs Reference
const me3 = {
    name: "Shamm",
    age: 23
};

console.log(me === me3); // false (different references)
Primitive types (numbers, strings, booleans) are pass by value.

Objects and arrays are pass by reference.

3. Higher-Order Functions (HOF) & Callbacks
3.1 Callback Functions
Definition:
A function passed as an argument to another function.

function greet(name) {
    console.log(`Hello ${name}`);
}

function processUser(callback) {
    const name = "Shamm";
    callback(name);
}

processUser(greet); // Output: Hello Shamm
3.2 Higher-Order Functions
Definition:
A function that either accepts a function as an argument or returns a function.

function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
4. Promises
Definition:
A Promise is an object that predicts a future value. It has three states:

pending: Initial state, neither fulfilled nor rejected.

fulfilled: Operation completed successfully.

rejected: Operation failed.

Syntax:

let promise = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
5. Asynchronous JavaScript & Event Loop
5.1 setTimeout and Web API
console.log("Start");

setTimeout(() => {
    console.log("Delayed message");
}, 2000);

console.log("End");
setTimeout is handled by the Web API in browsers.

Code inside setTimeout runs after the delay while main code continues.

5.2 Event Loop
Concept:

JS is single-threaded.

Call Stack executes functions.

Web APIs handle async tasks (like timers, HTTP requests).

Completed tasks go to the Callback Queue.

Event Loop moves tasks from Callback Queue to Call Stack when stack is empty.

Example Flow:

console.log("Start") → call stack

setTimeout → sent to web API

console.log("End") → call stack

After 2 seconds, callback added to queue → event loop moves it to call stack → prints "Delayed message"

