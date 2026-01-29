# JavaScript Core Concepts Notes

## Single Thread vs Multi Thread

### Single Thread
- Executes one task at a time.
- JavaScript is single-threaded.
- Uses Call Stack for execution.

### Multi Thread
- Executes multiple tasks simultaneously.
- Used in languages like Java, C++ (with threads).

---

## Execution Context

Execution Context is the environment where JavaScript code runs.

### Two Phases

#### Memory Allocation Phase
Memory is allocated before execution.

Stores:
- Variables → stored as undefined
- Functions → stored as full function definition

#### Code Execution Phase
- Code runs line by line.
- Values assigned to variables.
- Functions invoked.

---

## Example 1

```js
var a = 2;

function square(num){
    var ans = num * num;
    return ans;
}

var square1 = square(3);
var square2 = square(a);
```

Memory Phase
```
a = undefined
square = function
square1 = undefined
square2 = undefined
```

Execution Phase
```
a = 2
square1 = 9
square2 = 4
```

---

## Example 2

```js
var a = 8;

function add(sum){
    var ans = sum + sum;
    return ans;
}

var add1 = add(4);
var add2 = add(a);
```

---

## Call Stack
- Call Stack keeps track of function execution.
- Only one function runs at a time in JavaScript.
- Functions are pushed and popped from stack.

---

## Static Typing vs Dynamic Typing

### Static Typing
- Type defined at compile time.
- Example: C, Java.

### Dynamic Typing
- Type decided at runtime.
- JavaScript is dynamically typed.

---

## Memory in JavaScript

### Stack Memory
- Stores Primitive Data Types.
- Small size.
- Fast access.
- Temporary memory.

### Heap Memory
- Stores Non-Primitive Data Types.
- Large size.
- Used for Objects and Arrays.
- Garbage Collector cleans unused memory.

---

## Data Types

### Primitive Types
- Number
- String
- Boolean
- Null
- Undefined
- NaN

### Reference Types
- Array
- Object

---

## var vs let vs const

| Keyword | Scope | Reassign | Redeclare |
|---|---|---|---|
| var | Function | Yes | Yes |
| let | Block | Yes | No |
| const | Block | No | No |

---

## Hoisting

Hoisting means JavaScript moves declarations to the top of scope.

Example:
```js
console.log(a);
var a = 5;
```

Output:
```
undefined
```

Because internally:
```
var a;
console.log(a);
a = 5;
```

---

## Summary
- JavaScript is Single Threaded.
- Execution Context has Memory Phase and Execution Phase.
- Call Stack manages function execution.
- Stack → Primitive data.
- Heap → Reference data.
- JavaScript is Dynamically Typed.
- Hoisting allows using variables before declaration (only declaration, not initialization).
