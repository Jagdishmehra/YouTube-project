import { createSlice } from "@reduxjs/toolkit";


const FilterSlice=createSlice({
    name:'filter',
    initialState:{
        filtered:null,
    },
    reducers:{
        filterdata:(initialState,action)=>{
            initialState.filtered=action.payload
        }
    }
})
export const {filterdata}=FilterSlice.actions
export default FilterSlice.reducer;