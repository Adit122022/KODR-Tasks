import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    data:[],
}
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getData:(state,action) =>{state.data = action.payload },
        add : (state, action)=>{ state.data.push(action.payload); },
        remove:(state)=>{ state.data.pop()}

    }
   
});
export default productSlice.reducer;
export const {add , remove ,getData} =productSlice.actions;