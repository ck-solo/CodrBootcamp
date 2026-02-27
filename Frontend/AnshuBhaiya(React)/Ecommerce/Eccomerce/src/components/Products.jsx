import React from "react";
import { useOutletContext } from "react-router-dom";
import Product from "./Product";

function Products() {
  const { products } = useOutletContext();

  return (
    <div className="flex flex-wrap gap-8 justify-center p-10 
                    bg-linear-to-br from-teal-50 to-blue-100 min-h-screen">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;