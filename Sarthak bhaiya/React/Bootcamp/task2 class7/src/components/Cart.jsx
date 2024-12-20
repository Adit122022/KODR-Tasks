import React from "react";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 border-b"
          >
            {/* image */}
            <div className="w-36 rounded-lg h-36 overflow-hidden">
              <img className="w-full object-cover h-full " src={item.img} alt="" />
            </div>
          {/*  text and buttons */}
          <div className="flex  items-center gap-16">
              {/* content */}
              <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            {/* buttons */}
            <div>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 bg-gray-200 rounded mx-1"
              >
                -
              </button>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 bg-gray-200 rounded mx-1"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
