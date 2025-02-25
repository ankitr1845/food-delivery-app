import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        AddItem:(state, action)=>{
            let alreadyExists = state.find((item)=>item.id===action.payload.id)
            if(alreadyExists){
                return state.map((item)=>(item.id===action.payload.id?{...item,qty:item.qty+1}:item))
            }
            else{
                state.push(action.payload)
            }
        },
        RemoveItem:(state, action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },
        Increment:(state, action)=>{
            return state.map((item)=>(item.id===action.payload?{...item,qty:item.qty+1}:item))
        },
        Decrement:(state, action)=>{
            return state.map((item)=>(item.id===action.payload?{...item,qty:item.qty-1}:item))
        }
    }
})

export const {AddItem, RemoveItem, Increment, Decrement} = cartSlice.actions
export default cartSlice.reducer