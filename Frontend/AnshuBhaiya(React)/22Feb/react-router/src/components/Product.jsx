import React from "react";
import { Link } from "react-router-dom"; 

function Product({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
    <div className="border p-4 w-48 ">
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p>{product.description}</p>
      <p className="font-semibold">₹{product.price}</p>
    </div> 
    </Link>
  );
}

export default Product;