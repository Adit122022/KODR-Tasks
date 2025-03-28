import React, { createContext, useState, useEffect } from 'react';

export const ProductData = createContext();

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // For handling loading state

  useEffect(() => {
    // Replace with your API URL
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched or error occurs
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductData.Provider value={{ products, loading }}>
      {children}
    </ProductData.Provider>
  );
};

export default ProductContext;
