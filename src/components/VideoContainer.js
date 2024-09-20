import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API } from '../constants/Images'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setVideoData } from '../constants/VideoDataSlice'
const VideoContainer = () => {
  const dispatch=useDispatch();
        const [videos,setvideo]=useState([])

    const youtubedata=async()=>{
        const data=await fetch(YOUTUBE_API);
        const json=await data.json()
        //console.log(json.items);
        setvideo(json.items);
        dispatch(setVideoData(json.items));
        // const id=videos[1].id
        // console.log(id);
    }
    useEffect(()=>{
        youtubedata()
    },[])

  return (
    <div className='flex flex-wrap ml-6 w-full h-screen overflow-y-scroll'>
        {videos.map((video)=><Link to={"/watch?v="+ video.id} key={video.id}><VideoCard videodata={video}/></Link>)}  
    </div>
  )
}

export default VideoContainer
