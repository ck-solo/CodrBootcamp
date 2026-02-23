import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Product } from "./components/Product";
import { ProductCard } from "./components/ProductCard";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path:"/products",
    element:<Products/>
  },
  {
    path:"/product/product",
    element:<Product/>
  },
  {
    path:"/products/:productId",
    element:<ProductCard /> 
  }
   
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);