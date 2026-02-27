import React from "react";
import { useOutletContext } from "react-router-dom";

function Cart() {
  const { cart } = useOutletContext();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-xl text-gray-600">
          Your cart is empty 🛒
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-10 min-h-screen bg-linear-to-br from-teal-50 to-blue-100">

      <h1 className="text-3xl font-bold text-gray-800">
        Your Cart
      </h1>

      <div className="flex flex-col gap-4">
        {cart.map(item => (
          <div
            key={item.product.id}
            className="flex justify-between items-center bg-white p-5 rounded-xl shadow"
          >
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg">
                {item.product.title}
              </h2>
              <p className="text-gray-600">
                ₹{item.product.price} × {item.quantity}
              </p>
            </div>

            <p className="font-bold text-teal-600">
              ₹{item.product.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-end text-2xl font-bold text-gray-800">
        Total: ₹{totalAmount}
      </div>
    </div>
  );
}

export default Cart;