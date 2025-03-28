
//  for all thr syncrons actions or the actions not involved in API calls .
export { add } from "../reducers/ProductSlice";  // imoorted and exported directly..... we cant use the add here in this file

import { getData, remove } from "../reducers/ProductSlice";
export const asyncRemove = ()=> async (dispatch ,getState)=>{
setTimeout(()=>{
   dispatch(remove())
},2000)
}
export const asyncgetporducts =()=> async (dispatch ,getState)=>{
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        dispatch(getData(data));
    } catch (error) {
        console.error(error)
    }
}

