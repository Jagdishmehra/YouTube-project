import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice=createSlice({
    name:'sidebar',
    initialState: {
        showMenu: true,
    },

    reducers:{
        togglesidebar:(initialState)=>{
            initialState.showMenu = !initialState.showMenu
        },
        notshowsidebar:(initialState)=>{
            initialState.showMenu= false
        },
    }
})
export const {togglesidebar, notshowsidebar} = SidebarSlice.actions;
export default SidebarSlice.reducer;

