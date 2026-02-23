var a = 8;

function add(sum){
    var ans = sum + sum;

    return ans;
}

var add1 = add(4);
var add2 = add(a);

// how it work first what happen next so basically it run in an exectuion context
// so it run in a single thread first the variable value is store as undefined and then the whole function is store then went to add1 in which there is a function call and that time it start to invoked  the funciton and then  function create its own exectuion context and in that memory allocation the varible value 4 is stored and then ans value is store as 8 then it went to execution context and show the answer of add1 as 8 then it went to add2 and same process is repeated but this time the value is taken from the global exectuion context which is 8 and then the ans value is store as 16 and then it show the answer of add2 as 16


console.log(var1); // output: undefined
// console.log(var2); // output: undefined this is temporal dead zone
// console.log(var3); // ReferenceError: Cannot access 'var3' before initialization
var var1 = 10;
let var2 = 20;
const var3 = 30;

sayHello();

function sayHello(){
   console.log("Hello");
}
