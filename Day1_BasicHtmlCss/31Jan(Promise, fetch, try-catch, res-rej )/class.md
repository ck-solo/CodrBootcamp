Promise ek object hai koi bhi async jab assign krte hai tab promise object return krt hai 
isme state property  3 anom(distinct value) -> pending fullfilled reject
fetch
promise 


********************************************class********************
# 📘 JavaScript Promises & Fetch (31 Jan)

---

## 🧠 Core Concept (Theory)

**Promise ek object hota hai.**

* Jab bhi koi **async operation** (jaise `fetch`, `setTimeout`, file upload, API call) start hota hai, JavaScript **Promise object return karta hai**.
* Promise future me ya to **value dega** ya **error**.

### 🔁 Promise States (3 distinct values)

1. **pending** → kaam chal raha hai (initial state)
2. **fulfilled** → kaam successfully complete ho gaya
3. **rejected** → error aa gaya / kaam fail ho gaya

> ⚠️ Promise ki state ek baar change hone ke baad dobara change nahi hoti.

---

## 🌐 fetch() kya hai?

* `fetch()` ek **built‑in async function** hai
* Ye **Promise return karta hai**
* Promise resolve hota hai jab response aa jata hai

---

## 🔹 Example 1: Pending State

```js
const URL_2 = "https://jsonplaceholder.typicode.com/posts/1"

const fetchData = () =>{
    const res = fetch(URL_2);
    console.log(res)
}
```

### 🧩 Line by Line Explanation

* `URL_2` → API ka address store kiya
* `fetchData()` → normal function
* `fetch(URL_2)` → async kaam start hua
* `res` → **Promise object** mila (abhi pending)
* `console.log(res)` → pending promise dikhega

📌 Yahan **await use nahi kiya**, isliye data nahi mila.

---

## 🔹 Example 2: Fulfilled State (async / await)

```js
const URL_3 = "https://jsonplaceholder.typicode.com/posts/1"

const fetchData = async () =>{
    const res = await fetch(URL_3);
    console.log(await res.json())
}

fetchData()
```

### 🧩 Explanation

* `async` → function async bana diya
* `await fetch()` → jab tak promise resolve na ho, wait karega
* `res` → Response object
* `res.json()` → response body ko JS object me convert karta hai
* `await res.json()` → final data

📌 Yahan promise **fulfilled** state me gaya.

---

## 🔹 Example 3: Reject Case (Invalid URL)

```js
const URL_4 = "https://googly.typicode.com/posts/1"

const fetchData = async () =>{
    const res = await fetch(URL_4);
    console.log(res.ok)
    console.log(await res.json())
}
```

### 🧩 Explanation

* URL galat hai
* `res.ok` → `false` hoga
* `fetch()` **network error me hi reject hota hai**
* galat URL par bhi response aa sakta hai

📌 isliye `res.ok` check karna zaroori hai.

---

## 🔹 Promise with .then() and .catch()

```js
const URL_1 = "https://jsonplaceholder.typicode.com/posts/1"

fetch(URL_1)
.then((data)=>{
    console.log('this is from then', data)
})
.catch((e)=>{
    console.log("this is from catch", e)
})
```

### 🧩 Explanation

* `fetch()` → Promise return karta hai
* `.then()` → jab promise **fulfilled** ho
* `.catch()` → jab promise **rejected** ho

---

## 🔹 Reject Example

```js
const URL_2 = "googllyy.com"

fetch(URL_2)
.then((data)=>{
    console.log('this is from then', data)
})
.catch((e)=>{
    console.log("this is from catch", e)
})
```

### 🧩 Explanation

* URL galat hone ki wajah se
* Promise **rejected** ho gaya
* Control `.catch()` me chala gaya

---

## ⏱ setTimeout + Promise

```js
function uploadFile(){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res("Uploaded")
        }, 2000);
    })
}
```

### 🧩 Explanation

* `uploadFile()` → Promise return karta hai
* `new Promise()` → manually promise create kiya
* `res` → resolve function
* `setTimeout()` → delay create karta hai
* 2 sec ke baad promise **fulfilled** ho jayega

---

## 🔹 Using uploadFile()

```js
uploadFile()
.then((data)=>{
    console.log(data)
})
```

* `then()` me "Uploaded" milega

---

## 🔹 Custom Promise (Fulfilled)

```js
function handle(){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res({state:"Fulfilled"})
        }, 3000);
    })
}
```

### 🧩 Explanation

* 3 sec ke baad promise resolve
* object return kiya `{state: "Fulfilled"}`

---

## 🔹 Custom Promise (Rejected)

```js
let bariable = new Promise((res, rej)=>{
    setTimeout(() => {
        rej({state:"rej"})
    }, 3000);
})

bariable
.then((data)=>{
    console.log(data)
})
.catch((e)=>{
    console.log("this is error", e)
})
```

### 🧩 Explanation

* `rej()` call kiya
* Promise **rejected** ho gaya
* `.then()` skip ho gaya
* `.catch()` execute hua

---

## 📝 Final Summary

* Promise async ka base hai
* fetch hamesha promise return karta hai
* `async/await` readable syntax hai
* `.then/.catch` old but important
* Promise manually bhi create kar sakte hain

---

✅ **Date:** 31 January


