// async 
// pengind state 
// const URL_2 = "https://jsonplaceholder.typicode.com/posts/1"
// const fetchData =  () =>{
//     const res =  fetch(URL_2);
//     console.log( res)
// }

// fullfilled state 
// const URL_3 = "https://jsonplaceholder.typicode.com/posts/1"
// const fetchData = async () =>{
//     const res = await fetch(URL_3);
//     console.log( await res.json())
// }

// fetchData()

//reject

// const URL_4 = "https://googly.typicode.com/posts/1"
// const fetchData = async () =>{
//     const res = await fetch(URL_4);
//     console.log(res.ok)
//     console.log( await res.json())
// }

// fetchData()
 


// .then 
// const URL_1 = "https://jsonplaceholder.typicode.com/posts/1"
// fetch(URL_1).then((data)=>{
//     console.log('this is from then', data)
// }).catch((e)=>{
//     console.log("this is from catch", e)
// })

// // .catch 
// const URL_2 = "googllyy.com"
// fetch(URL_2).then((data)=>{
//     console.log('this is from then', data)
// }).catch((e)=>{
//     console.log("this is from catch", e)
// })


// settimeout ek higher order function hai jiske andar ek callback function hai jise ek time duration ko delay krna hai 

// function uploadFile(){
//     return new Promise((res, rej)=>{
//         setTimeout(() => {
//             resolve("Uploaded")
//         }, 2000);
//     })
// }
// console.log(uploadFile())

// uploadFile().then((data)=>{
//     console.log(data)
// }).catch((e)=>{

// })



function handle(){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res({state:"Fullfilled"})
        }, 3000);
    })
}

// handle().then((data)=>{
//     console.log(data)
// }).catch((e)=>{
//     console.log("this is catch error", e)
// })


let bariable = new Promise((res, rej)=>{
        setTimeout(() => {
            rej({state:"rej"})
        }, 3000);
    })

bariable.then((data)=>{
    console.log(data)
}).catch((e)=>{
    console.log("this is error",e)
})




