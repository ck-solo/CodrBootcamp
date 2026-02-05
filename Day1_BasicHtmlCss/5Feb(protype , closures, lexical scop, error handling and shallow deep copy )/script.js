// const str1 = "kuch bhi"
// const str2  = new String
// // console .log(str2)


// // const obj1 ={
// //     age : 23
// // }
// // console.log(obj1.age)

// // const obj3 = {
// //     name: "firstobj"
// // }

// // let obj2 = Object.create(obj1)
// // obj2 = Object.create(obj3)
// // obj2.age = 34
// // console.log(obj2.age) 


// const obj1 = {
//     age: 23
// }

// const obj2 = Object.create(obj1);
// obj2.name = "oggy"
// const obj3 = Object.create(obj2);
// obj3.age = 26;
// // const obj4 = Object.create(obj3);
// // const obj5 = Object.create(obj4);

// // console.log(obj5)
// // console.log(obj2)
// // console.log(obj1)
// // console.log(obj2)
// // console.log(obj3.name)

// let obj11 = {
//     age:19
// }
// let obj12 = {
//     name:"Anshu"
// }
// let obj13 = {
//     age:30
// }

// obj12 = Object.create(obj11)
// obj13 = Object.create(obj12)

// const obj14 =  Object.create(obj13)
// console.log(obj14.name);

// function outerFun(name){

//     return function innerFun(){
//         console.log(name)
        
//     }
// }

// const innerFun = outerFun("Lucy")
// innerFun()

// function addmemo(){
//     const value = {};
//     return function(a,b){
//         if((a,b) in value){
//             console.log("Fetching from value...");
//             return value[a,b]
//         }

//         console.log("calculation...")
//         const result = a + b
//         value[(a,b)] = result
//         return result
//     }
// }

// const add = addmemo()
// console.log(add(3,5))
// console.log(add(3,5))
// console.log(add(7,9))
// console.log(add(12,52))


// function fun2(){
//     let b = 20
//     console.log(b)
//     function f1(){
//         b = 30
//         console.log(b)
//     }
//     f1()
//     return b
// } 

// console.log(fun2())  



// function pass(mark){
//     if(mark<18){
//         throw new Error("Failed")

//     }
//     return "Pass"
// }
// try{
//     const mark = pass(8)
//     console.log(mark)
// }catch(error){
//     console.error("An error occured", error)
// }
// finally{
//     console.log("Finished executing the code")
// }


// Shallowcopy & deep copy  
// const original ={
//     name:"sohail",
//     address:{
//         state:"Delhi"
//     }
// }

// const copy = {...original}
// copy.address = {state : "bihar"}
// console.log(original === copy)
// console.log(copy.address)
// console.log(original.address === copy.address)


let obj1 = {
  name: "Lucy",
  address: {
    city: "Delhi"
  }
};

let obj2 = { ...obj1 }; // shallow copy

obj2.name = "Tom";
obj2.address.city = "Mumbai";

console.log(obj1.name);         // Lucy
console.log(obj1.address.city); // Mumbai ❗





 let name = {
  name: "Lucy",
  address: {
    city: "Delhi"
  }
};

let copyname = {...name}; 

copyname.name = "Tom";
copyname.address.city = "Mumbai";

console.log(name.name);         
console.log(copyname.name);         
console.log(name.address.city); 
console.log(copyname.address.city); 
console.log(copyname === name)

