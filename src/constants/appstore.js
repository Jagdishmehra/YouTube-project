import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";
import VideoDataSlice from "./VideoDataSlice";
import SearchSlice from "./SearchSlice";
import FilterSlice from "./FilterSlice";
import MovieSlice from "./MovieSlice";
import CommentSlice from "./CommentSlice";
import ChatSlice from "./ChatSlice";

const appstore=configureStore({
    reducer:{
        sidebar: SidebarSlice,
        setVideoData: VideoDataSlice,
        cacheData:SearchSlice,
        filterdata:FilterSlice,
        movies:MovieSlice,
        comment:CommentSlice,
        chat:ChatSlice,
    },

});

export default appstore;