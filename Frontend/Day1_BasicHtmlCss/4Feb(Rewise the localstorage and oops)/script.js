// const appleStore ={
//     storenaam :"Apple",
//     price : 23433
// }
// const bakery ={
//     storenaam : "Britannia",
//     price : 24224
// }
 
// const printstore = function(){
//     console.log(this)
// }
// printstore.call(bakery)

// const printstorename = printstore.bind(appleStore)
// printstorename()

 

// const store = [
//   {
//     storeName: "Lenovo",
//     items: [
//       { name: "Lenovo1", price: 300 },
//       { name: "Lenovo2", price: 2300 }
//     ]
//   },
//   {
//     storeName: "HP",
//     items: [
//       { name: "HP1", price: 1300 },
//       { name: "HP2", price: 1800 }
//     ]
//   }
// ];


// const printPrice = function(){
//     console.log(this.storeName)
//     let sum = 0;
//     this.items.forEach(e =>{
//         sum += e.price
//     })
//     console.log(this.storeName, "=>", sum )
// }

// store.forEach((store)=>{
//     printPrice.call(store)

// })


// const printcount = function(country,state){
//     console.log(this.store,country,state)
// }

// printcount.bind(bakery,"usa","new York")



 const Book1 = {
    author:"Christain",
    title:"think different"
} 

const Book2 = {
    author:"robesrt",
    title:"no-world"
} 

// const novel = function(){
//     console.log(this)
// }
// novel.call(Book1)
// const novelstore = novel.bind(Book2)
// novelstore()


// const pintnovelorigin = function(country,state){
//     console.log(this.author, country,state)

// }

// pintnovelorigin.call(Book1,"usa","new york")



// cookies 

// document.cookie ="username=lucy;domain=http://127.0.0.1:5501/";
// document.cookie = "theme=dark;"
// document.cookie = "theme=;expires=Thu 01 Jan 1970 00:00:00 UTC" //emplt after = is used for delete

// const cook = document.cookie
// console.log(cook)

// // localStorage
// localStorage.setItem('username', 'lucy');
// localStorage.setItem('name', 'lucifer');
// localStorage.setItem('username3', 'lucifer-jana');


// localStorage.getItem('username');
// // localStorage.clear();
// localStorage.removeItem('username');    

// console.log(localStorage)
// localStorage.key(0);


// session storage 
sessionStorage.setItem('key', 'value');
sessionStorage.setItem("user","lucy") 
sessionStorage.setItem("user2","lucifer") 
sessionStorage.setItem("user3","lucky") 
var lastname = sessionStorage.getItem('key');
var username = sessionStorage.getItem('user');
sessionStorage.removeItem('key');
sessionStorage.removeItem('user2');
// sessionStorage.clear(); 
console.log(lastname)
console.log(username)
