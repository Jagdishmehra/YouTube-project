import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../constants/Images';
import { FaGithub } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import CommentData from './CommentData';
import Footer from './Footer';

const WatchPageContent = ({videoid}) => {
    const[subscribers,setsubs]=useState()
    const[liked,setlike]=useState(true)
    const [buttontick,setbuttontick]=useState(false);
    const[requiredVideo,setrequiredVideo]=useState([]);
    const [videodata,setvideodata]=useState('')
    const [show,setshow]=useState(false);

        const browserdata=async()=>{
            const data=await fetch(YOUTUBE_API);
            const json=await data.json()
            setrequiredVideo(json.items);
        }
        useEffect(()=>{
           browserdata() 
           let num=Math.random()*10
                if(num>1){
                const number=num.toFixed(2)+'M'
                     setsubs(number) 
                    } 
        },[])
        useEffect(()=>{
            if(requiredVideo.length>0&&videoid){
                const searchvideo=requiredVideo.find((v)=>v.id===videoid)
                    setvideodata(searchvideo);
               }
        },[videoid,requiredVideo])
        if(!videodata) return <div className='flex items-center text-3xl'>loading...</div>
            const{channelTitle,description,publishedAt}=videodata?.snippet
            const{commentCount, likeCount,viewCount}=videodata?.statistics

            function showdate(date){
                const data=new Date(date)
                const newdate=data.toLocaleDateString("en-GB")
                return newdate
            };
            const handleToggle=()=>{
                setshow(!show);
            };
            function handleViews(value){
                const num=value;
                if(num>=1000000) return ((num/1000000).toFixed(1)+'M')
                  else if(num>=1000&&num<10000000) return((num/1000).toFixed(0)+'K')
                else return num;
              };
              
              
  return (
    <div>
      <h1 className='mt-3 mb-2 text-xl font-bold'>{videodata?.snippet?.localized?.title}</h1>
      <div className='flex justify-between'>
        <div className='flex'>
      <FaGithub className='cursor-pointer text-4xl mr-4'/>
        <ul className='cursor-pointer'>
            <li className='font-semibold'>{channelTitle}</li>
                <li className='text-xs font-light'>{subscribers} subscribers</li>
            </ul>
            <button onClick={()=>{
                setbuttontick(!buttontick)

            }}
            className={`ml-12 text-sm rounded-full px-3
              transition-all duration-200 ${buttontick ?'bg-gray-100 text-black hover:bg-gray-200':'bg-black text-white hover:bg-slate-800'}`}>
                {buttontick ?'Subscribed':'Subscribe'}</button>
            </div>
          <div className='flex'>
                <button onClick={()=>setlike(!liked)} 
                className='bg-gray-200 px-4 flex items-center rounded-l-full
                 text-sm font-bold hover:bg-gray-300 transition-all duration-100'>
                    {liked?<BiLike className='text-2xl pr-0.5' />
                    :<BiSolidLike className='text-2xl pr-0.5' />}{handleViews(likeCount)}</button>
            <button
            className='bg-gray-200 px-3 flex items-center rounded-r-full 
            text-sm border border-l-gray-100 border-transparent hover:bg-gray-300 transition-all duration-100'>
                <BiDislike className='text-xl' />
                </button>
            <button className='bg-gray-200 px-4 flex items-center text-sm font-bold rounded-full mx-6 hover:bg-gray-300 transition-all duration-100'>
                <PiShareFatLight className='text-xl mr-1' />Share</button>
            <button className='bg-gray-200 px-4 flex items-center text-sm rounded-full font-bold hover:bg-gray-300 transition-all duration-100'>
                <GoDownload className='text-xl mr-1'/>Download</button>
            </div> 
      </div>
<div  className='mt-3 bg-gray-100 rounded-lg p-1'>              
   <h1 className='flex justify-between mt-2 mx-2 text-sm font-semibold'> {handleViews(viewCount)} views {showdate(publishedAt)}
   <button onClick={handleToggle} className='text-md'> {show ? 'Load less':'Load more..'}</button>
   </h1>
   <h1 className='mx-2'>Subscribe to the channel by clicking on subscribe button:</h1>
    {show && <p className='whitespace-pre-wrap mx-2'>{description}</p>}
</div>
<CommentData comCount={handleViews(commentCount)}/>
<Footer/>
    </div>
  )
}
export default WatchPageContent