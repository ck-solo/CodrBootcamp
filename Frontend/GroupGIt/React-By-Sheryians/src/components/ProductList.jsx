import Product from "./Product";

const Products = ({ products, onAddToCart }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((item) => (
        <Product
          key={item.id}
          product={item}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default Products;