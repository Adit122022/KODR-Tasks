import React from 'react';
import Product from './components/Product.jsx';

const App = () => {
  const products = [
    {
      name: "Wireless Earbuds",
      img: "https://images.unsplash.com/photo-1648447272271-1c2292144c50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      disc: "High-quality wireless earbuds with noise cancellation and long battery life.",
      price: 49.99
    },
    {
      name: "Smartwatch",
      img: "https://images.unsplash.com/photo-1517502474097-f9b30659dadb?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      disc: "Feature-rich smartwatch with fitness tracking, heart rate monitoring, and GPS.",
      price: 129.99
    },
    {
      name: "Bluetooth Speaker",
      img: "https://images.unsplash.com/photo-1517502474097-f9b30659dadb?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      disc: "Portable Bluetooth speaker with powerful sound and water resistance.",
      price: 39.99
    },
    {
      name: "Gaming Mouse",
      img: "https://images.unsplash.com/photo-1703052399541-34d3bfa12e9c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      disc: "Ergonomic gaming mouse with customizable RGB lighting and high-precision sensor.",
      price: 24.99
    },
    {
      name: "Laptop Stand",
      img: "https://images.unsplash.com/photo-1623251606108-512c7c4a3507?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      disc: "Adjustable laptop stand for improved ergonomics and better airflow.",
      price: 19.99
    }
  ];
  const addtoCart = ()=>{

  }

  return (
    <div className='w-screen px-20  py-4 h-screen overflow-x-hidden '>
      <Product products={products} />
    </div>
  );
};

export default App;
