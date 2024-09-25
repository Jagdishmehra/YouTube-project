import { createSlice } from "@reduxjs/toolkit";

const CommentSlice=createSlice({
    name:'comment',
    initialState:{
        comments:[],
    },
    reducers:{
        addcomment:(state,action)=>{
            state.comments.push(action.payload)
        }
    }
})

export const {addcomment}=CommentSlice.actions
export default CommentSlice.reducer;