import React from "react";
import ProductCard from "../components/ProductCard";

function CartPage({ cart , setCart}) {
  console.log(cart);
  
  return (
    <div className=" flex flex-wrap gap-4">
      {cart.map((elem) => { 
        return <ProductCard key={elem.id} elem={elem} cart={cart} setCart={setCart} />;
      })}
    </div>
  );
}

export default CartPage;
