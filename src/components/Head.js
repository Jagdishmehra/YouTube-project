import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { LOGO_URL } from '../constants/Images';
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from 'react-redux';
import { togglesidebar } from '../constants/SidebarSlice';

const Head = () => {

    const dispatch=useDispatch();
    const handleSideBar=()=>{
            dispatch(togglesidebar());
    };
  return (
    <div className='flex justify-between'>
<div className='flex'>
<button className='ml-4 mt-1 mb-3 px-3 rounded-full hover:bg-gray-200 transition-all duration-200' 
onClick={handleSideBar}><RxHamburgerMenu 
className='text-xl  hover:cursor-pointer' /></button>
<img className='w-32 h-16 -my-1  hover:cursor-pointer' alt='logo' src={LOGO_URL}/>
</div>
<div className='w-[45%] '>
    <form onSubmit={(e)=>e.preventDefault()}
    className='flex w-full'>
        <input type='text' placeholder='Search'
        className='outline-none text-lg border border-gray-300 my-2 py-2 px-4 font-light w-[90%] rounded-l-3xl'/>
        <button  //onClick={handleSearch}
        className='bg-gray-100 hover:bg-gray-200 my-2 px-4 rounded-r-3xl border border-gray-300  border-l-transparent '>
        <CiSearch className='text-2xl p-0' /></button>
    </form>
</div>
<div className='flex justify-between'>
<IoNotificationsOutline className='text-2xl my-5 hover:bg-gray-200 rounded-3xl cursor-pointer' />
<button  
className='flex items-center mx-6 bg-gray-100 my-2.5 rounded-3xl px-4 hover:bg-gray-200 transition-all duration-100'><CgProfile className='mr-2 text-xl' />Sign In</button>
</div>
    </div>
  )
}

export default Head
