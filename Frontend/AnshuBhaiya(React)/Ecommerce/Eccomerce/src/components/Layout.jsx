import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import { productsdata } from "../data/data";
import Footer from "./Footer";

const Layout = () => {
  const [products, setProducts] = useState(productsdata);
 
  const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);
 

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation user={user} setUser={setUser} cart={cart} products={products} setProducts={setProducts} />
      <Outlet context={{ products,setProducts ,cart, setCart, user, setUser }} />
      <Footer />
    </div>
  );
};

export default Layout;