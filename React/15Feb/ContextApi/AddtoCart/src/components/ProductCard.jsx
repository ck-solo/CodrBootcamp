import React from "react";

const ProductCard = ({ elem, setCart, cart }) => {

  const cartitem = cart.find(item => item.id === elem.id);

  const additem = () => {
    setCart(prev => {
      const exist = prev.find(item => item.id === elem.id);

      if (exist) {
        return prev.map(item =>
          item.id === elem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...elem, quantity: 1 }];
      }
    });
  };

  const subitem = () => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === elem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <div className="w-[19%] p-4 mr-4 rounded-xl flex flex-col">

      <div className="h-48 w-full mb-3">
        <img
          className="h-full w-full object-contain rounded-xl"
          src={elem.image}
          alt={elem.title}
        />
      </div>

      <div className="flex flex-col grow justify-between">

        <div>
          <h1 className="text-lg font-semibold mb-2">
            {elem.title.length > 14
              ? `${elem.title.slice(0, 14)}...`
              : elem.title}
          </h1>

          <p className="text-md mb-4 text-2xl">
            Price -{" "}
            <span className="text-green-600 font-semibold">
              ${elem.price}
            </span>
          </p>
        </div>

        <div className="flex gap-3">
 
          <button className="flex-1 py-2 text-xl rounded-xl text-white bg-green-600 hover:bg-green-700 transition">
            Buy Now
          </button>
 
          {cartitem ? (
            <div className="flex-1 flex items-center justify-between bg-black text-white rounded-xl px-2">
              <button onClick={subitem} className="text-xl">
                -
              </button>

              <span className="text-xl">
                {cartitem.quantity}
              </span>

              <button onClick={additem} className="text-xl">
                +
              </button>
            </div>
          ) : (
            <button
              onClick={additem}
              className="flex-1 py-2 px-1 text-xl rounded-xl text-white bg-black hover:bg-gray-800 transition"
            >
              Add to cart
            </button>
          )}

        </div>

      </div>
    </div>
  );
};

export default ProductCard;
