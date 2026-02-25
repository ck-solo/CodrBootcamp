import React from "react";
import { Link, useOutletContext } from "react-router-dom";

function Product({ product }) {
  const { cart, setCart } = useOutletContext();

  const cartItem = cart.find(item => item.product.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleIncrease = () => {
    if (cartItem) {
      const updated = cart.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const handleDecrease = () => {
    if (!cartItem) return;

    if (cartItem.quantity === 1) {
      const filtered = cart.filter(
        item => item.product.id !== product.id
      );
      setCart(filtered);
    } else {
      const updated = cart.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCart(updated);
    }
  };

  return (
    <div className="flex flex-col justify-between
                    bg-white rounded-2xl shadow-md 
                    hover:shadow-xl transition-all
                    p-5 w-64 h-72">

      <Link to={`/product/${product.id}`}>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-gray-800">
            {product.title}
          </h2>
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
          <p className="text-lg font-semibold text-teal-600">
            ₹{product.price}
          </p>
        </div>
      </Link>

      {quantity === 0 ? (
        <div className="flex gap-3 mt-4">
          <button
            onClick={handleIncrease}
            className="flex-1 bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
          >
            Buy
          </button>

          <button
            className="flex-1 border border-teal-500 text-teal-600 py-2 rounded-lg hover:bg-teal-50"
          >
            Wishlist
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between mt-4 bg-teal-100 rounded-lg px-4 py-2">
          <button
            onClick={handleDecrease}
            className="text-xl font-bold text-teal-700"
          >
            -
          </button>

          <span className="font-semibold text-teal-800">
            {quantity}
          </span>

          <button
            onClick={handleIncrease}
            className="text-xl font-bold text-teal-700"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default Product;