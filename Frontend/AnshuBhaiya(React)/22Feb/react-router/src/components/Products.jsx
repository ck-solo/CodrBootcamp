import React from "react"; 
import Navigation from "../Navigation";
import Product from "./Product"; 
import { productsdata } from "../data/data";

function Products() {
   
  return (
    <div className=" border "> 
      <Navigation />
      <div className=" mt-5 flex flex-wrap gap-5 justify-center">
        {productsdata.map((product) => {
       return <Product key={product.id} product={product} />
      })}
      </div>
    </div>
  );
}

export default Products;
