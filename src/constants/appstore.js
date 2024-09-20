import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";
import VideoDataSlice from "./VideoDataSlice";

const appstore=configureStore({
    reducer:{
        sidebar: SidebarSlice,
        setVideoData: VideoDataSlice,
    },

});

export default appstore;