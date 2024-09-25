import { createSlice } from "@reduxjs/toolkit"


const SearchSlice=createSlice({
    name:'cacheData',
    initialState:{},

    reducers:{
        cacheSearch:(initialState,action)=>{
            initialState=Object.assign(initialState,action.payload)
        }
    }
})

export const {cacheSearch}=SearchSlice.actions;

export default SearchSlice.reducer
