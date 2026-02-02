// teen api call krna hai dependent hai
// let URL_2 = ""

// let URL_1 = "https://jsonplaceholder.typicode.com/posts/1";
// let URL_2 = "https://jsonplaceholder.typicode.com/posts/1";
// let URL_3 = "https://jsonplaceholder.typicode.com/posts/1";

// const first = fetch(URL_1);
// const second = fetch(URL_2);
// const third = fetch(URL_3);

// const fetchData = async () => {
//   const res = await first;
//   console.log("first api res", await res.json());
// };

// fetchData()
// const fetchData2 = async () => {
//   const res2 = await second;
//   console.log("second api res", await res2.json());
// };

// fetchData2()

// const fetchData3 = async () => {
//   const res3 = await third;
//   console.log("third api res", await res3.json());
// };
// fetchData3()

// const fetchDataAll = (()=>{
//     first.then((data)=>{
//         console.log("this is first url",data)
//     }).catch((e)=>{
//         console.log("this is first error",e)
//     })
//     second.then((data)=>{
//         console.log("this is second url",data)
//     }).catch((e)=>{
//         console.log("this is second error",e)
//     })
//     third.then((data)=>{
//         console.log("this is third url",data)
//     }).catch((e)=>{
//         console.log("this is third error",e)
//     })

// })

// fetchDataAll()

// dependent
// const fetchALLDetails = async () => {
//   const res = await fetch(first);
//   const data = await res.json();
//   const res2 = await fetch(second);
//   const data2 = await res2.json();

//   console.log("this is data 1", data);
//   console.log("this is data 1", data2);
// };

// fetchALLDetails()
dependent;

fetchData(URL_1)
  .then((data) => {
    console.log("this is from url 1", data);
  })
  .catch((e) => {
    console.log("this is an error", e);
  });

//////////////////////

// Multiple promise ko handle
// let fakeUser =  "https://fakestoreapi.com/users"
// let fakeProduct = " https://kuchsbhchalle.com/products"
// let singleUser = "https://fakestoreapi.com/users/1"

// let username = fetch(fakeUser);
// let userproduct = fetch(fakeProduct)

// Promise.all([username,userproduct])
// .then((response)=>{
//     console.log("this is resposnse1",response[0])
//     console.log("this is resposnse2",response[1])
// })
// .catch((error)=>{
//     console.log(error)
//     // console.log("this is error1",error[0])
//     // console.log("this is error2",error[1])

// })

// Event loop

// const a = 12;
// const b = 122;
// const c = 16;
// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// console.log(a)
// console.log(b)
// console.log(c)

// ???????????????????????????????
// Q1.Call three Dependent API?
let fakeUser = "https://fakestoreapi.com/users";
let fakeProduct = " https://fakestoreapi.com/products";
// let fakee = " https://kuchbhi.com/products"; // error url
let singleUser = "https://fakestoreapi.com/users/1";

const DaetFect = async () => {
  try {
    // 1️⃣ First API
    const res1 = await fetch("https://fakestoreapi.com/users");
    const users = await res1.json();
    console.log("First API:", users);

    // 2️⃣ Second API depends on first
    const userId = users[0].id; // use data from first API
    const res2 = await fetch(`https://fakestoreapi.com/users/${userId}`);
    const singleUser = await res2.json();
    console.log("Second API:", singleUser);

    // 3️⃣ Third API depends on second (optional)
    const productId = singleUser.id;
    const res3 = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const products = await res3.json();
    console.log("Third API:", products);
  } catch (error) {
    console.error("Error:", error);
  }
};

DaetFect();
