components ->
ek aisa useable content hai jo different jagah use kr skte hai differnt jagah pr same line of code
it is a function based and class based components

react kisi bhi chize ko pehle object me tod deta hai 
browser sab chize

type 
props
children

<div id="container">  type=div  props = [id=container] children {type:h1 , props={}, children[hello]} 
<h1>Hello</h1>
</div>


phele jsxx ko object me convert krta hai jise virutal dom kehte hai aur fir use dubara html me convert rkta hai jise real dom kehte hai 
virtual dom ki do copy react krta hai comparison ke liye aur fir jo code updae hota hai
js 
jese jo stae change hotga wesehi  
{defing algorithm} comparison part
whole proces reconcilation


1. react node
 import React from "react";
const App = () => {
   const virtualDOMNode = {
  type: 'div',
  props: {
    id: 'profile-container',
    className: 'card',
    children: [
      {
        type: 'h1',
        props: {
          style: { color: 'blue' },
          children: 'User Profile'
        }
      },
      {
        type: 'p',
        props: {
          children: 'Status: Active'
        }
      }
    ]
  }
};


  return (
     <div>
       {React.createElement(
         virtualDOMNode.type, 
         virtualDOMNode.props, 
         ...virtualDOMNode.props.children.map(child => 
            React.createElement(child.type, child.props, child.props.children)
         )
       )}
    </div>
  )

};

export default App;


2. state 
state is a deata there are twotypes of state local state global state 



3. usestate
ek hook hai jo ki ek varible hota hai aur ek function hota hai 
usestate me kisi bhi type ka data store kr stke hai 

 import React, { useState } from 'react'
 
 function Classwork() {

    const [count, setCount] = useState(0);
    const increase = () =>{
        setCount(count++); == count = count + 1this show error because const value is intializing direct
        setCount(count+1)  == + 1 value is same but updation
    }

   return (
     <div>
        
     </div>
   )
 }
 
 export default Classwork


 useeffect (()=>{},[])

 case1 Empty dependecy[]
 useEffect(()=>{
 console.log("Run only once");
}, []);
👉 Sirf first render par chalega



case2 depndency ke saath[count]
useEffect(()=>{
 console.log("Count changed");
}, [count]);
👉 Jab count change hoga tab chalega.


case3 no dependency 
useEffect(()=>{
 console.log("Every render");
});
👉 Har render par chalega.

