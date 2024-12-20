import React, { useState } from "react";
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      img: "https://images.unsplash.com/photo-1648447272271-1c2292144c50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      disc: "High-quality wireless earbuds with noise cancellation and long battery life.",
      price: 49.99,
    },
    {
      id: 2,
      name: "Smartwatch",
      img: "https://images.unsplash.com/photo-1517502474097-f9b30659dadb?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      disc: "Feature-rich smartwatch with fitness tracking, heart rate monitoring, and GPS.",
      price: 129.99,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      img: "https://images.unsplash.com/photo-1517502474097-f9b30659dadb?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      disc: "Portable Bluetooth speaker with powerful sound and water resistance.",
      price: 39.99,
    },
    {
      id: 4,
      name: "Gaming Mouse",
      img: "https://images.unsplash.com/photo-1703052399541-34d3bfa12e9c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      disc: "Ergonomic gaming mouse with customizable RGB lighting and high-precision sensor.",
      price: 24.99,
    },
    {
      id: 5,
      name: "Laptop Stand",
      img: "https://images.unsplash.com/photo-1623251606108-512c7c4a3507?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      disc: "Adjustable laptop stand for improved ergonomics and better airflow.",
      price: 19.99,
    },
  ];

  const [cart, setCart] = useState([]);

   // Add to Cart Functionality
   const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Increase quantity if product exists
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product to cart
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Update Quantity Functionality
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  // Remove from Cart Functionality
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate Total Price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-screen px-20 py-4 h-screen overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Product Shop</h1>
      <Product products={products} addToCart={addToCart} />
      <Cart
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      <h2 className="text-xl font-semibold mt-4">Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default App;
