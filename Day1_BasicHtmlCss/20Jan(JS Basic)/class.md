# 📘 Tailwind CSS & JavaScript – Easy Class Notes

These notes are written in **simple, human-friendly English**, based on what the mentor covered in class. You can directly use this file for **Notion, GitHub, or revision before interviews**.

---

## 🎨 Tailwind CSS Basics

### Tailwind CSS = Utility-First CSS

Instead of writing custom CSS again and again, Tailwind provides **ready-made utility classes** that you directly use in HTML.

### Tailwind Classes vs Inline CSS

* **Inline CSS**: Written inside the `style` attribute (not reusable, messy)
* **Tailwind Classes**: Clean, reusable, responsive, and scalable

Example:

```html
<!-- Inline CSS -->
<div style="color:red; font-size:20px"></div>

<!-- Tailwind -->
<div class="text-red-500 text-xl"></div>
```

### Tailwind CDN

* CDN allows you to use Tailwind **without installing anything**
* Best for beginners and small projects

```html
<script src="https://cdn.tailwindcss.com"></script>
```

➡️ You just link the CDN and start using Tailwind classes on already-written HTML.

### API (Simple Meaning)

* API means **calling data or functionality from somewhere else**
* Tailwind CDN itself works like an API that provides CSS utilities

---

## 📱 Responsive Design in Tailwind

Tailwind uses **mobile-first approach**.

### Breakpoints

* `sm` → small screens (mobile)
* `md` → medium screens (tablet)
* `lg` → large screens (laptop)

Example:

```html
<div class="text-sm md:text-lg lg:text-xl"></div>
```

Meaning:

* Mobile → small text
* Tablet → medium text
* Laptop → large text

---

## ⚙️ JavaScript – Core Concepts

### Why JavaScript is Asynchronous?

JavaScript behaves asynchronously **because of the Event Loop**.

### Execution Flow

1. **Assignment Phase**

   * Variables are allocated memory
2. **Execution Phase**

   * Code is executed line by line

### Web APIs

Provided by the browser, not JavaScript itself:

* `setTimeout`
* `setInterval`
* DOM events

These APIs help JS perform async tasks.

---

## 🧠 Hoisting & Scope

### Hoisting

* Variables and functions are moved to the top in memory
* `var` is hoisted with `undefined`
* `let` and `const` are hoisted but stay in **TDZ**

### Global Scope

* Variables declared outside any function
* Accessible everywhere (not recommended to overuse)

---

## 🧬 Data Types in JavaScript

### Primitive Data Types

Stored by value

* `number`
* `string`
* `boolean`
* `null`
* `undefined`
* `NaN`
* `symbol it provide unique id `

### Reference Data Types

Stored by reference

* `array`
* `object`
* `function`

➡️ Arrays are **heterogeneous** (can store different data types).

---

## 📦 Variables in JavaScript

| Keyword | Scope    | Re-declare | Re-assign |
| ------- | -------- | ---------- | --------- |
| var     | Function | ✅          | ✅         |
| let     | Block    | ❌          | ✅         |
| const   | Block    | ❌          | ❌         |

---

## 🌍 Window vs Document

* `window` → Browser object (global)
* `document` → HTML structure

```js
window.alert("Hello")
document.querySelector("body")
```

---

## 🚫 TDZ (Temporal Dead Zone)

* Time between variable hoisting and initialization
* Applies to `let` and `const`

```js
console.log(a); // Error
let a = 10;
```

---

## ✅ Boolean Conversion Example

```js
let a = null;
console.log(!!a);
```

Output:

```
false
```

`!!` converts value into boolean.

---

## ❌ Falsy Values

Values that become `false` when converted to boolean:

* `0`, `-0`
* `null`
* `undefined`
* `NaN`
* `""`
* `false`
* `document.all`

### Truthy Values

➡️ Everything else except falsy values

---

## 🔢 Operators in JavaScript

### Arithmetic Operators

`+  -  *  /  %  **`

### Assignment Operators

`+=  -=  *=  /=  %=  **=`

### Logical Operators

* `&&` → both conditions true
* `||` → one condition true
* `!` → opposite value

### Comparison Operators

`==  !=  ===  !==  <  >  <=  >=`

### Ternary Operator

```js
condition ? true : false;
```

### Unary Operators

`++  --`

---

## 🧵 Strings in JavaScript

Common methods:

* `slice()`
* `split()`
* `concat()`
* `join()`

---

## 🧩 Functions in JavaScript

### What is a Function?

A function is a **block of code** that runs only when it is called.

---

### ES5 Functions

#### Function Statement

```js
function greet() {
  console.log("hello");
}
```

#### Function Expression

```js
var greet = function () {
  console.log("hello");
};
```

#### Anonymous Function

```js
function () {
  console.log("hello");
}
```

---

### ES6 – Arrow Functions

#### Basic Arrow Function

```js
let fn = () => {
  5;
};
console.log(fn); // undefined
```

#### Implicit Return

```js
let b = () => 5;
console.log(b()); // 5
```

#### One Parameter

```js
let gg = a => a;
console.log(gg(7)); // 7
```

---

## ⚡ IIFE (Immediately Invoked Function Expression)

Function that runs **immediately after creation**.

### Normal Function Call

```js
var a = function () {
  console.log("hello");
};
a();
```

### IIFE Syntax

```js
(() => {
  console.log("hello");
})();
```

---

## ✅ End of Notes
 
 
