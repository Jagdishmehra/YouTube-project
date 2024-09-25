import React from 'react'
import { FaUserCircle } from "react-icons/fa";
const LiveChatCards = ({name,message}) => {
  return (
    <div className='m-3 flex items-center'>
      <FaUserCircle className='text-xl' />
      <span className='px-3 font-bold text-sm'>{name}</span>
      <span className='text-sm'>{message}</span>
    </div>
  )
}

export default LiveChatCards
