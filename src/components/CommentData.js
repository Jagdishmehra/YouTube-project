
import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
const CommentData = ({comCount}) => {
    const[showbtn,setshowbtn]=useState(false);
    const handleshow=()=>{
        setshowbtn(true);
    }

  return (
    <div>
        <h1 className='mt-4 my-4 text-xl font-bold'>{comCount} Comments</h1>
      
      <div className='flex items-center'>
      <FaRegUserCircle className='text-3xl'/>
        <input onClick={handleshow}
        type='text'
        className='w-[100%] ml-4 font-light p-0.5 outline-none border border-transparent border-b-gray-200'
        placeholder='Add a comment.....'>
        </input>
        </div>
      {showbtn && <div className='w-full flex justify-end'>
        <button onClick={()=>setshowbtn(false)}
            className='m-2 p-2 hover:bg-gray-300 rounded-full transition-all duration-200'>Cancel</button>
      <button className='m-2 bg-gray-200 p-2 rounded-full text-gray-500' >Comment</button></div>
}

      
    </div>
  )
}

export default CommentData
