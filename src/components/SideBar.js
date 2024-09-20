import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { IoTrendingUpOutline } from "react-icons/io5";
import { IoIosMusicalNote } from "react-icons/io";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {

  const showsidebar=useSelector((store)=>store.sidebar.showMenu)

  if (!showsidebar) return (
    <div className=''>
    <Link to="/"><div className='hover:bg-gray-200 transition-all duration-200 cursor-pointer rounded-xl'><IoMdHome className='mr-6 ml-5 text-[2.5rem] py-[0.5rem] mt-3'/>
<h1 className='text-xs ml-[1.5rem] mb-5 pb-2 font-light'>Home</h1>
</div></Link>
    
    <div className='hover:bg-gray-200 transition-all duration-200 cursor-pointer rounded-xl'><MdOutlineSubscriptions className='mr-6 ml-5 text-[2.5rem] py-[0.5rem]'/>
    <h1 className='text-xs ml-0.5 mb-5 pb-3 font-light'>Subscriptions</h1></div>
    </div>
  );
  return (
    <div className='w-[15%]'>
     <ul className='ml-2'>
      <Link to="/" ><li className='flex items-center font-light text-sm px-2 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-150 rounded-lg'><IoMdHome className='mr-6 ml-2 text-2xl'/>Home</li>
      </Link><li className='flex items-center font-light text-sm px-2 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-150 rounded-lg'><MdOutlineSubscriptions className='mr-6 ml-2 text-2xl'/>Subscription</li>
      <li className='flex items-center font-light text-sm px-2 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-150 rounded-lg'><FaRegThumbsUp className='mr-6 ml-2 text-2xl'/>Liked Video</li>
      </ul>
      <hr className='mt-4 mx-2 w-full'/>
      <ul className='ml-2'>
      <li className='mt-6  px-2 text-lg font-bold py-2  ml-2'>You</li>
      <li className='flex items-center font-light text-sm px-2 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-150 rounded-lg'><FaHistory className='mr-6 ml-2 text-2xl'/>History</li>
      </ul>
      <hr className='mt-4 mx-2 w-full'/>
      <ul className='ml-2'>
      <li className='mt-6 font-bold  text-lg px-2 py-2  ml-2'>Explore</li>
      <li className='flex items-center font-light text-sm px-2 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-150 rounded-lg'><IoTrendingUpOutline className='mr-6 ml-2 text-2xl' />Trending</li>
      <li className='flex items-center font-light text-sm px-2 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-150 rounded-lg'><BiMoviePlay className='mr-6 ml-2 text-2xl'/>Movies</li>
      <li className='flex items-center font-light text-sm px-2 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-150 rounded-lg'><IoIosMusicalNote className='mr-6 ml-2 text-2xl'/>Music</li>
     </ul>
    </div>
  )
}

export default SideBar
