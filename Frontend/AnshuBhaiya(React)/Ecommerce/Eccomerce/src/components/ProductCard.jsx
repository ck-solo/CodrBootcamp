import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

export function ProductCard() {
  const { productId } = useParams();
  const { products } = useOutletContext();

  const product = products.find(
    (elem) => elem.id == Number(productId)
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-teal-50 to-blue-100">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-96 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {product?.title}
        </h2>
        <p className="text-gray-600">{product?.description}</p>
        <p className="text-xl font-semibold text-teal-600">
          ₹{product?.price}
        </p>
      </div>
    </div>
  );
}