import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "./SidebarSlice";


const appstore=configureStore({
    reducer:{
        sidebar: SidebarSlice,

    },

});

export default appstore;