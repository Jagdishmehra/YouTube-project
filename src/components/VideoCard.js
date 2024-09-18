import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { BiLogoGithub } from "react-icons/bi";
import { Link } from 'react-router-dom';
const VideoCard = ({videodata}) => {
  console.log(videodata);
  const {snippet,statistics}=videodata;
  const {channelTitle, localized,thumbnails,publishedAt}=snippet;
  
  function handleViews(){
    const num=statistics.viewCount;
    if(num>=1000000) return ((num/1000000).toFixed(1)+'M')
      else if(num>=1000&&num<10000000) return((num/1000).toFixed(0)+'K')
    else return num;
  };
  
  return (
    <div className='my-6 ml-2 w-[18.5rem] cursor-pointer'>
        <img className='rounded-lg hover:scale-[1.01] transition-transform duration-200 ease-out'
        src={thumbnails.medium.url}/>
        <div className='flex'>
          <div className='flex-col m-2'><Link to="https://github.com/Jagdishmehra"><BiLogoGithub className='text-3xl hover:scale-105 mb-1' /></Link>
        <Link to="https://www.linkedin.com/in/jagdish-singh-mehra-465551218/" ><IoLogoLinkedin className='text-3xl hover:scale-105'/></Link></div>
        <ul className='mx-2'>
        <li className='mt-2 overflow-hidden'>{localized.title}</li>
        <li className='font-thin text-sm'>{channelTitle}</li>
        <li className='flex font-thin text-sm'>{handleViews()} views</li>
</ul></div>
   
    </div>
  )
}

export default VideoCard
