// 1. Real World Scenario: Imagine you are loading a Dashboard. You fetch UserProfile, Notifications, and Settings.

const nameApi = "https://jsonplaceholder.typicode.com/users/1";
const notificationApi = "https://jsonplaceholder.typicode.com/posts";
const settingApi = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async () => {
  try {
    const res = await fetch(nameApi);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("This is error ", error);
  }
};

const notifyData = async () => {
  try {
    const notres = await fetch(notificationApi);
    const notedata = await notres.json();
    return notedata;
  } catch (error) {
    console.log(error);
  }
};

const setadata = async () => {
  try {
    const setApi = await fetch(settingApi);
    const setdata = await setApi.json();
    return setdata;
  } catch (error) {
    console.log(error);
  }
};

// Promise.all([fetchData(), notifyData(), setadata()])
//   .then(([profile, notifications, settings]) => {
//     console.log("User Profile:", profile);
//     console.log("Notifications:", notifications);
//     console.log("Settings:", settings);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// 2. The "Loop Trap": forEach vs for...of

// 3. Promise.race() (Handling Timeouts)
// Fake promises (dummy data)
const slowPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Slow Promise Finished"), 3000);
});

const fastPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Fast Promise Finished"), 5000);
});

// Timeout promise
const timeout = (ms) => {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request Timed Out")), ms)
  );
};

// Race example
Promise.race([slowPromise, fastPromise, timeout(2000)])
  .then((winner) => {
    console.log("Winner:", winner);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

// WIth real api 
// const promisee1 = "https://fakestoreapi.com/users";
// const promisee2 = "https://fakestoreapi.com/products";
 
// const timeout = (ms) => {
//   return new Promise((_, reject) =>
//     setTimeout(() => reject(new Error("Request Timed Out")), ms)
//   );
// };

// const fetchWithTimeout = async () => {
//   try {
//     const response = await Promise.race([
//       fetch(promisee1),    
//       timeout(2000)        
//     ]);
//     const data = await response.json();
//     return { source : "users", data}
//   } catch (error) {
//     return { source : "users", error}
//   }
// };

// const fetchWithTimeout2 = async () =>{
//     try {
//         const response2 = await Promise.race([
//             fetch(promisee2),
//             timeout(1000)
//         ]);
//         const data2 = await response2.json();
//             return { source : "users", data2}        
//     } catch (error) {
//         return { source : "users", error}
//     }
// }
// Promise.race([fetchWithTimeout(),fetchWithTimeout2()]).then((value) => {
//   console.log("Winner Promise Data:", value);
// });






//3.3 The "Fastest Mirror" (Promise.any)
const promise1 = Promise.reject(new Error("error"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// Expected output: "quick"
