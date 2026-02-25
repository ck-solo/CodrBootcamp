import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {Home} from "./components/Home"
import {About} from "./components/About"  
import Products from "./components/Products";
import './index.css'  
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Protected from "./components/Protected";
import { ProductCard } from "./components/ProductCard";
 

const router = createBrowserRouter([
   {
 
    element:<Layout />,
    children:[{
      path:"/",
      element:<Home />
    },
    {
      path:"/about",
      element:<About />
   }, 
    {
      path:"/products",
      element:<Products />
   },  {
    path:"/product/:productId",
    element:<ProductCard />

   },
   {
    path:'/login',
    element:<Login />

   }
   ,{
    element:<Protected />,    
    children: [{
      path:"/dashboard",
      element:<Dashboard />
    }]
   }
  ]
  }
   
]); 

console.log(router)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);