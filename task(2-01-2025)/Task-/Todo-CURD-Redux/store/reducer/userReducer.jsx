import  { createSlice } from '@reduxjs/toolkit'
import { userList } from '../../src/Data/Data'



export const userSlice = createSlice({
  name: 'user',
  initialState: userList,
  reducers: {
   addUser: (state,action) => { state.push(action.payload) }   ,
   updateUser: (state,action) => {
    const {id,name,email} = action.payload 
    const upUser =state.find(user=>user.id == id);
    if(upUser){
    upUser.name = name;
    upUser.email = email;
     }
   }  ,

  deleteUser: (state,action) => {
    const {id} = action.payload
    const upUser =state.find(user=>user.id == id);
    if(upUser)  return state.filter (f =>f.id !==id);
  }
},
  
})


export const { addUser , updateUser , deleteUser } = userSlice.actions

export default userSlice.reducer