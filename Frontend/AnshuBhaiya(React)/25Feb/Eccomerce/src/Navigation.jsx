import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddItemModal from "./components/AddItemModal";

const NAVCONFIG = [
  { label: "Home", link: "/" }, 
  { label: "Products", link: "/products" },
  { label: "Login", link: "/login" },
  { label: "Dashboard", link: "/dashboard" },
];

const Navigation = ({ products, setProducts, cart }) => {
  const [showModal, setShowModal] = useState(false);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div
        className="flex justify-between items-center px-8 py-4 
                      bg-linear-to-r from-teal-500 to-blue-600 
                      text-white shadow-md"
      >
        <h1 className="text-2xl font-bold">Shopsy</h1>

        <div className="flex gap-8 items-center">
          {NAVCONFIG.map((nav) => (
            <Link key={nav.link} to={nav.link}>
              {nav.label}
            </Link>
          ))}

          {/* Cart Button */}
          <Link to="/cart" className="relative">
            <button className="bg-white text-teal-600 px-4 py-2 rounded-lg font-semibold">
              🛒 Cart
            </button>

            {totalQuantity > 0 && (
              <span
                className="absolute -top-2 -right-2 
                     bg-red-500 text-white text-xs 
                     px-2 py-1 rounded-full"
              >
                {totalQuantity}
              </span>
            )}
          </Link>

          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-teal-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
          >
            + Add Item
          </button>
        </div>
      </div>

      {showModal && (
        <AddItemModal
          setProducts={setProducts}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Navigation;
