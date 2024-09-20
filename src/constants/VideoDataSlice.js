import { createSlice } from "@reduxjs/toolkit";


const VideoDataSlice=createSlice({
    name:"videoData",
    initialState:{
            videos:null,
    },
    reducers:{
        setVideoData:(initialState,action)=>{
            initialState.videos=action.payload
        },
    },
})

export const{setVideoData}=VideoDataSlice.actions;
export default VideoDataSlice.reducer;