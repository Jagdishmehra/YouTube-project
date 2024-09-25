import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET } from "./Images";


const ChatSlice=createSlice({
    name:'chat',
    initialState:{
        chats:[],
    },

    reducers:{
        appendchats:(state,action)=>{
            state.chats.splice(LIVE_CHAT_OFFSET,1)
            state.chats.unshift(action.payload)
        }
    }
})
export const {appendchats}=ChatSlice.actions
export default ChatSlice.reducer;