import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import { productsdata } from "../data/data";

const Layout = () => {
  const [products, setProducts] = useState(productsdata);
 
  const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);

    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation user={user} setUser={setUser} cart={cart} products={products} setProducts={setProducts} />
      <Outlet context={{ products,setProducts ,cart, setCart, user, setUser }} />
    </div>
  );
};

export default Layout;