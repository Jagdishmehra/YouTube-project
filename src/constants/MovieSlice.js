import { createSlice } from "@reduxjs/toolkit";


const MovieSlice=createSlice({
    name:'movies',
    initialState:{},

    reducers:{
        addmovies:(initialState,action)=>{
            action.payload.forEach(element => {
                initialState[element.id]=element
                
            });
        }
    }
})

export const{addmovies}=MovieSlice.actions
export default MovieSlice.reducer;