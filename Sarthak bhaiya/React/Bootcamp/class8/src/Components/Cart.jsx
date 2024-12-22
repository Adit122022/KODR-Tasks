import React from 'react';
import { useCart } from '../Context/CartContext'; // Import the useCart hook

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart(); // Access the cart, removeFromCart, clearCart and updateQuantity functions

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2); // Calculate the total price of all items based on quantity
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return; // Prevent decreasing quantity below 1
    updateQuantity(productId, quantity);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center text-lg text-gray-600">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>

              <div className='flex  items-center gap-5'>
              <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)} // Decrease quantity
                    className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)} // Increase quantity
                    className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)} // Remove item from cart
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Remove
                </button>
              </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-8 bg-gray-100 p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Total: ${calculateTotal()}</h3>
            <button
              onClick={clearCart} // Clear all items from the cart
              className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-200"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
