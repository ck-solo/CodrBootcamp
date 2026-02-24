import React from "react";
import { useParams } from "react-router-dom";

import { productsdata } from "../data/data";
export function ProductCard() {
  const { productId } = useParams();

  const product = productsdata.find(elem => elem.id == productId)

  // const product = productsdata[productId]
  // console.log(product)
  return (
    <div className="border p-4 w-48 ">
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p>{product.description}</p>
      <p className="font-semibold">₹{product.price}</p>
    </div>
  );
}
