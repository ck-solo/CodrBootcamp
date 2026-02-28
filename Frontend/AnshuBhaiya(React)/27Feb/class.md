today's topic is usememo and callbacks
performance optimization

ek componenets banana hai parent
iske along do aalag compoents child1 and child2
in dono ke content hai isme ek paragraph dikhana hai 
ye paraggrpah hai jo parent se aa rha hai


usecallback
sirf function ke liye hi use hota hai
ye rerendering ko rokta hai aur dependencyes me jo value pass hogi wo hi re-render hoga

usecallback ka use isliye kiya jata hai kyunki memo use krte time sabsa bada drawback ye hota hai ki wo jese hi kisi object pr use krte hai to uski id change hoti hai jiski wjah se wo rerender hota hai doesn't matter memo use hua hai to usi ko rerneder na hone ke liye usecallback ka use kiya jata hai 

usememo is basically use call back for values
 usememo functio ko recall krne se rokta hai 

 use callback function ko recreate hone se rokta hai

react Context api is a built-in feature that allows data to be shared globally across componenets without passign props manually at every level. It helps avoid prop drilling by providing the central store
using the provider and letting any nested components access the data directly using usecontext.

memo children me props change hone pr re-render hota hai
usecallback -> function ko recreate hone se bachata ha
usememo => function ko recall krne se bachata hai


# 📘 Documentation -- 27 Jan

## 📌 Topics Covered

-   useMemo\
-   useCallback\
-   memo\
-   React Context API

------------------------------------------------------------------------

# 🔹 useMemo

## 📖 Definition

`useMemo` ek React hook hai jo **values ko memoize** karta hai.

👉 Matlab agar koi heavy calculation hai, toh wo **sirf tabhi dobara
chalega jab dependency change hogi**.

## 🎯 Why We Use It

-   Unnecessary re-renders avoid karta hai\
-   Heavy computations ko repeat hone se bachata hai\
-   Performance improve karta hai

------------------------------------------------------------------------

## 💻 Example: Numbers Component

``` jsx
import React, { useMemo, useState } from "react";

const Numbers = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const make2x = useMemo(() => {
    for (let i = 10; i > 0; i--) {
      console.log("Calculating the 2x");
    }
    return number * 2;
  }, [number]);

  return (
    <div className="m-12">
      <div>
        <input
          className="outline"
          type="number"
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <div>Number: {number}</div>
      <div>2xed Value: {make2x}</div>
      <div>Count: {count}</div>

      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Numbers;
```

------------------------------------------------------------------------

# 🔹 useCallback

## 📖 Definition

`useCallback` sirf **functions ko memoize** karta hai.

👉 Jab parent component re-render hota hai, normally function ki new
reference ban jaati hai.

👉 `useCallback` ensure karta hai ki function ki reference **tabhi
change ho jab dependency change ho**.

## 🎯 Why We Use It

-   Child components ko unnecessary re-render se bachata hai\
-   Jab function prop ke through pass karte ho

------------------------------------------------------------------------

## 💻 Example: Parent + Child

``` jsx
import React, { useState, useCallback, memo } from "react";

const Child1 = memo(({ para, handleClick }) => {
  console.log("Child1 rendered");
  return (
    <div>
      <p>{para}</p>
      <button onClick={handleClick}>Click Child1</button>
    </div>
  );
});

const Child2 = memo(({ para }) => {
  console.log("Child2 rendered");
  return <p>{para}</p>;
});

const Parent = () => {
  const [count, setCount] = useState(0);
  const para = "Ye paragraph parent se aa raha hai";

  const handleClick = useCallback(() => {
    console.log("Button clicked in Child1");
  }, []);

  return (
    <div>
      <h2>Parent Component</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <p>Count: {count}</p>

      <Child1 para={para} handleClick={handleClick} />
      <Child2 para={para} />
    </div>
  );
};

export default Parent;
```

------------------------------------------------------------------------

# 🔹 memo

## 📖 Definition

`memo` ek **Higher Order Component (HOC)** hai.

👉 Ye child component ko unnecessary re-render hone se bachata hai.

## 🎯 How It Works

-   Agar props same hain → re-render nahi hoga\
-   Agar props ka reference change ho gaya (object/function) → re-render
    ho jayega

### ✅ Optimization Tip

-   Functions → `useCallback`
-   Values / Objects → `useMemo`

------------------------------------------------------------------------

# 🔹 React Context API

## 📖 Definition

Context API ek built-in React feature hai jo **global data share karne
ke liye use hota hai**.

## 🎯 Why We Use It

-   Prop drilling avoid karne ke liye\
-   Deeply nested components me data share karne ke liye

## 🔄 Flow

1.  Context create karo\
2.  Provider se value pass karo\
3.  Nested components me `useContext` se access karo

------------------------------------------------------------------------

# ✅ Final Summary

  Concept       Purpose
  ------------- ----------------------------------------------------------
  useMemo       Values ke liye optimization
  useCallback   Functions ke liye optimization
  memo          Child components ko unnecessary re-render se bachata hai
  Context API   Global data sharing without prop drilling
