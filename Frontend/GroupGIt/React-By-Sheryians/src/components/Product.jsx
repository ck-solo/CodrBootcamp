import Button from "./Button";

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 
                    hover:shadow-xl hover:-translate-y-1 
                    transition-all duration-300 flex flex-col gap-3">

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800">
          {product.name}
        </h3>
        <span className="text-sm text-gray-400">
          ID: {product.id}
        </span>
      </div>

      <p className="text-gray-600 text-sm">
        {product.description}
      </p>

      <p className="text-xl font-bold text-green-600">
        ₹{product.price}
      </p>

      <Button
        label="Add To Cart"
        onClick={() =>
          onAddToCart({
            product,
            quantity: 1,
          })
        }
      />
    </div>
  );
};

export default Product;