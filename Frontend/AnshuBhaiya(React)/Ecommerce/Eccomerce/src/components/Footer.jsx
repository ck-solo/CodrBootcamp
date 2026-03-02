 import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
         
        <h2 className="text-xl font-bold text-white">Shopsy</h2>
 
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/products" className="hover:text-white transition">Products</Link>
          <Link to="/cart" className="hover:text-white transition">Cart</Link>
        </div>
 
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Shopsy. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;