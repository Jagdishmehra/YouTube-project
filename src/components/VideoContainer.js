import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API } from '../constants/Images'
import { Link } from 'react-router-dom'
const VideoContainer = () => {
        const [videos,setvideo]=useState([])

    const youtubedata=async()=>{
        const data=await fetch(YOUTUBE_API);
        const json=await data.json()
        console.log(json.items);
        setvideo(json.items);
    }
    useEffect(()=>{
        youtubedata()
    },[])

  return (
    <div className='flex flex-wrap ml-6 w-full h-screen overflow-y-scroll'>
        {videos.map((video)=><Link to="/watch"><VideoCard key={video.id} videodata={video}/></Link>)}  
    </div>
  )
}

export default VideoContainer
