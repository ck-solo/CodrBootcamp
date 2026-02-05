protoypes and inheritance

jab bhi koi string object array banate hai to uski saari properties ko inherit kr lega
jese array ki sari prperoty ko inherit kr lega
same as number ki hogi to number ki property ko 


closures
ek function ke andar jab koi dusra function call hota hai aur wo apne parent fucntion ke variable ko access krta ho use closure kehte hai 



lexical scopping Function apne outer environment ke variables ko access karta hai based on where it is written in code.



Error handling
Program crash hone ke bajaye, error ko proper tareeke se handle karna.
error ko control karna instead of program ko crash hone dena


shallow copy and deep copy
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
