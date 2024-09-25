import React, {useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { addcomment } from '../constants/CommentSlice';
import { generateRandomNames } from '../constants/helper';

const CommentData = ({comCount}) => {
  const comment=useSelector(store=>store.comment.comments)
  const dispatch=useDispatch();
  const [randomname,setrandomname]=useState({})
    const[showinput,setshowinput]=useState("")
    const[showbtn,setshowbtn]=useState(false);
    const [showcomment,setshowcomment]=useState(false)
    const handlecomment=()=>{
      const newCommentId = comment.length; 
      setrandomname(prevNames => ({
  ...prevNames,
  [newCommentId]: generateRandomNames() 
}));
if(showinput.length>0)dispatch(addcomment(showinput))
        
        setshowcomment(true)
        setshowinput('');
    }
    const handleshow=()=>{
        setshowbtn(true);
    }

  return (
    <div>
        <h1 className='mt-4 my-4 text-xl font-bold'>{comCount} Comments</h1>
      
      <div className='flex items-center'>
      <FaRegUserCircle className='text-3xl'/>
        <input onClick={handleshow}
        value={showinput}
        onChange={(e)=>setshowinput(e.target.value)}
        type='text'
        className='w-[100%] ml-4 font-light p-0.5 outline-none border border-transparent border-b-gray-200'
        placeholder='Add a comment.....'>
        </input>
        </div>
      {showbtn && <div
      className='w-full flex justify-end'>
        <button onClick={()=>setshowbtn(false)}
            className='m-2 p-2 hover:bg-gray-300 rounded-full transition-all duration-200'>
                Cancel</button>
      <button onClick={handlecomment}
      className='m-2 bg-gray-200 p-2 rounded-full hover:bg-blue-600 hover:text-white'>
        Comment</button></div>}
        {showcomment && comment.map((c,index)=><div
        key={index} className='mt-5 mx-1 p-2 bg-gray-100'>
            <div className='flex items-center'>
            <FiUser className='text-lg mr-3'/>
            <span className='font-bold mr-2'> {randomname[index]||generateRandomNames()} </span>
               {c}
            </div>
        </div>)}
     </div>
  )
}

export default CommentData
