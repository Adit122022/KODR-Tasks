import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from './Components/Products';
import Header from './Components/Header';

const App = () => {
  
 const [products, setProducts] = useState([])
 const getData = async ()=>{
  let response = await axios.get('https://fakestoreapi.com/products')
console.log(response.data)
setProducts(response.data)
 }
 
 useEffect(() => {
  getData();
}, []);
  return (
  
    <div className='w-screeen h-screen overflow-hidden bg-gray-100'>
    <Header/>
<Products products={products} />
    </div>

  )
}

export default App