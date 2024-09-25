import React, { useEffect, useState } from 'react'
import { IoMdSend } from "react-icons/io";
import LiveChatCards from './LiveChatCards';
import { useDispatch, useSelector } from 'react-redux';
import { appendchats } from '../constants/ChatSlice';
import { generateRandomNames, randomStringgenerator } from '../constants/helper';

const LiveChat = () => {
    const[showmessage,setshowmessage]=useState("")
    const dispatch=useDispatch()
    const messages=useSelector(store=>store.chat.chats)

        useEffect(()=>{
            const i=setInterval(()=>{
                dispatch(appendchats({
                    name:generateRandomNames(),
                    message:randomStringgenerator(15),
                })) 
            },2000)
            return ()=> clearInterval(i);
        },[])

  return (
     <><div className='bg-gray-200 flex flex-col-reverse overflow-y-scroll border border-gray-300 mx-2 rounded-t-lg px-2 h-[530px]'>
      {messages.map((mess,index)=><LiveChatCards 
      key={index}
      name={mess.name}
      message={mess.message+'🚀'}/>)}
    </div>
    <form onSubmit={(e)=>{
        e.preventDefault()
    dispatch(appendchats({
        name:"Jagdish Mehra",
        message:showmessage,
    }))
    setshowmessage("")
    }} 
    className='flex p-2 rounded-b-lg bg-gray-200 border border-gray-300 border-t-transparent mx-2'>
        <input 
        value={showmessage}
        onChange={(e)=>setshowmessage(e.target.value)} 
        className='ml-2 text-sm border border-gray-200 rounded-full p-2 w-[80%]'
        placeholder='Chat...'
        type='text'></input>
<button type='submit' 
className='mx-4 '>
<IoMdSend className='text-3xl' />
</button>   
    </form>
   </>
  )
}

export default LiveChat
