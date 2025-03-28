import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, asyncRemove } from '../Store/actions/ProductActions'


const Two = () => {
    const dispatch =useDispatch()
    const {data} = useSelector((state) => state.products)
    console.log(data)
    const newProducts = {
       id: 4, name: "hello", price :200
    };
    const handleClick = () => {
        dispatch(add(newProducts));  
    }
  const  removeHandler =( ) =>{
       dispatch(asyncRemove())  
    }
  return (
    <div>Two
        <button onClick={handleClick}>
            Add
        </button>
        <button onClick={removeHandler}>
          remove
        </button>
    </div>
  )
}

export default Two