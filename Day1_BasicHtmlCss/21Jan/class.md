if else

falsy values "" 0 false null undefined NaN docuement.all
if(condition){
    console.log("true");
    else{

console.log("false");
    }
}


switch
switch(condition){
case 1:
    console.log("one");
break;
case 2:
    console.log("two");
break;
default:
    console.log("default");
}


loops

entry control
start condition, end condition,change condition

for loop
for(let i=0; i<5; i++){
    console.log(i);
}
post increment


exit control



 while loop 
 let i = 1;
while(i<5){
    console.log(i);
    i++;
}

exit control
do{
    console.log(i);
    i++;
}while(i<20);




Arrays

arr.push(4)
arr.pop()
arr.shift()
arr.unshift()
arr.splice()
arr.slice()
reverse 

arr.sorting concept

let res = arr.sort((a,b) = a-b);
ascending

let res = arr.sort((a,b) =>{
    return a-b;
});
descending


let res = arr.sort((a,b) =>{
    console.log(a,b);
    return a-b;
});
console.log(res);

let res = arr.reverse();
console.log(res);

let res = arr.concat(arr);
console.log(res);

let res = arr.join();
console.log(res);

let res = arr.indexOf(4);
console.log(res);

let res = arr.lastIndexOf(4);
console.log(res);

let res = arr.includes(4);
console.log(res);



functions
global scope

function statement
greet(); hello answer

function greet(){
    console.log("hello");
}

function expression
greet(); ab not define

var greet = function(){
    console.log("hello");
};



fat arrow function

let ab = () => {
   return 40
};

console.log(ab());
output=> 40


higher order function
1. function that return function



closures
1. function that use variable outside of its parent function scope

let ab =()=>{
    let a = 10;
    return () =>{
        console.log(a);
    }
}

ab()();
output=>10






