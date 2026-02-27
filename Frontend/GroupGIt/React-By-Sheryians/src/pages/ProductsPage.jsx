
import { useState } from "react";
import ProductsList from "../components/ProductList";
import CreateProductForm from "../components/CreateProductForm";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleCreateProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  const handleAddToCart = (cartItem) => {
    setCart((prev) => [...prev, cartItem]);
  };

  return (
    <div className="min-h-screen bg-linear-to-br 
                    from-blue-50 to-indigo-100 p-10">

      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Product Management
          </h1>

          <div className="bg-white px-4 py-2 rounded-xl shadow-md">
            🛒 Cart: <span className="font-bold">{cart.length}</span>
          </div>
        </div>

        <CreateProductForm onCreate={handleCreateProduct} />

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Product List
          </h2>

          {products.length === 0 ? (
            <p className="text-gray-500 text-center">
              No products added yet.
            </p>
          ) : (
            <ProductsList
              products={products}
              onAddToCart={handleAddToCart}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;