import React, { useEffect } from 'react'
import One from './Components/One'
import Two from './Components/Two'
import { useDispatch, useSelector } from 'react-redux'
import { asyncgetporducts } from './Store/actions/ProductActions'

const App = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.products);
  useEffect(()=>{
   data.length == 0 && dispatch(asyncgetporducts())
  },[])
  return (
    <div>
      <One/>
      <Two/>
    </div>
  )
}

export default App