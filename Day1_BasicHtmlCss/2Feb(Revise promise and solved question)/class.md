async await 
js ka default behavior single thread to usko wait krane ke liye asyn await use krte hai
jab tak async function complete nhi hoga console return nhi krega

promise ek object hota hai 

.then .catch me sabse badi problem hai callback hell


teen api call krna hai dependent hai
independent api ko call kese kregne

teen api call krna hai jo dependent nhi hai
ek system banana hai jisme network chala jaaye fir bhi api connect rhe 


let fakeUser =  "https://fakestoreapi.com/users"
let fakeProduct = " https://fakestoreapi.com/products"
let singleUser = "https://fakestoreapi.com/users/1"


let userRes = fetch(fakeUser)
let productRes = fetch(fakeProduct)

userRes.then(res=>(res.json())).then(res=>console.log("Users",res)).then(()=>{
    fetch(singleUser).then(res=>res.json()).then(res=>console.log("SingleUser depends on Users",res)).catch(err=>console.log(err))
}).catch(err=>console.log(err))

productRes.then(res=>res.json()).then(res=>console.log('Products' , res)).catch(err=>console.log(err))


????????????????????????/
let fakeUser =  "https://fakestoreapi.com/users"
let fakeProduct = " https://fakestoreapi.com/products"
let singleUser = "https://fakestoreapi.com/users/1"

let usreRef = fetch(fakeUser)
let userPro = fetch(fakeProduct)

usreRef.the



settiimeout and fetch me major difference
settimout kabhi promise return nhi krta its based on time duration kyu promise return nhi krta kyubki time pata rhta hai 
aur fetch promise return krta hai its kyunki time nhi pata hota hai 


**********************************************
js9000.app for event loop
event loop asynchoronus task perform krta hai micro queue and macro queue me 

promise ko macro task high priority
promise return nhi kr rhi micro task low priority
