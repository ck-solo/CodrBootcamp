import React from "react"
import {createRoot} from "react-dom/client"

let h1 = React.createElement("h1", {}, "this is react");
console.log(h1);
let h2 = React.createElement("h1", {}, "this is second heading in react");
console.log(h2);

let div = React.createElement("div",{className: "text" },[h1,h2]);

let parent = document.getElementById("root")
createRoot(parent).render(div)
