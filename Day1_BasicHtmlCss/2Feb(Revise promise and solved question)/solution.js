// 1. Real World Scenario: Imagine you are loading a Dashboard. You fetch UserProfile, Notifications, and Settings.

const nameApi = "https://jsonplaceholder.typicode.com/users/1";
const notificationApi = "https://jsonplaceholder.typicode.com/posts";
const settingApi = "https://jsonplaceholder.typicode.com/todos/1";

// const fetchJson = async (url) => {
//   try {
//     const res = await fetch(url);
//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching:", url, error);
//   }
// };

// Promise.all([
//   fetchJson(nameApi),
//   fetchJson(notificationApi),
//   fetchJson(settingApi),
// ])
//   .then(([profile, notifications, settings]) => {
//     console.log("User Profile:", profile);
//     console.log("Notifications:", notifications);
//     console.log("Settings:", settings);
//   })
//   .catch((error) => {
//     console.error("Error in Promise.all:", error);
//   });
// ************************************************************
// 2. The "Loop Trap": forEach vs for...of


// ***********************************************************
// 3. Promise.race() (Handling Timeouts)
// Fake promises (dummy data)
// const slowPromise = new Promise((resolve) => {
//   setTimeout(() => resolve("Slow Promise Finished"), 3000);
// });

// const fastPromise = new Promise((resolve) => {
//   setTimeout(() => resolve("Fast Promise Finished"), 5000);
// });

// Timeout promise
// const timeout = (ms) => {
//   return new Promise((_, reject) =>
//     setTimeout(() => reject(new Error("Request Timed Out")), ms)
//   );
// };

// Race example
// Promise.race([slowPromise, fastPromise, timeout(4000)])
//   .then((winner) => {
//     console.log("Winner:", winner);
//   })
//   .catch((error) => {
//     console.log("Error:", error.message);
//   });

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

// **********************************************

//3.3 The "Fastest Mirror" (Promise.any)
const promise1 = Promise.reject(new Error("error"));
const promise2 = Promise.reject(new Error("error"));
const promise3 = Promise.reject(new Error("error"));

const promises = [promise1, promise2, promise3];

Promise.any(promises)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

// Expected output: "quick"
