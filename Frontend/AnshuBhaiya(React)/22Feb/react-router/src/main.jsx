import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from "./components/Home"
import {About} from "./components/About" 
import Product from "./components/Product"; 
import Navigation from "./Navigation";
import Products from "./components/Products";
import './index.css'
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import { ProductCard } from "./components/ProductCard";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path:"/product/:productId",
    element:<ProductCard />
  }       
  ,
  {
    path:"/products",
    element:<Products />
  }   
  ,
  {
    path:"/cart",
    element:<Cart />
  }   
  ,
  {
    path:"/wishlist",
    element:<Wishlist />
  }   
   
]); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);