import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { notshowsidebar } from '../constants/SidebarSlice';
import { useSearchParams } from 'react-router-dom';
import WatchPageContent from './WatchPageContent';
import VideoContainer from './VideoContainer';

const WatchPage = () => {
  const[searchParams]=useSearchParams();

  const videoid=searchParams.get('v');
  //console.log(videoid);

        const dispatch=useDispatch();
        useEffect(()=>{
                dispatch(notshowsidebar());
        },[])

return (
  <div className='flex justify-between w-full h-screen overflow-y-auto'>
    <div className='mt-5 ml-2'>
      <iframe className='rounded-2xl'
      width="950" 
      height="495.56" 
      src={"https://www.youtube.com/embed/"+ videoid+"?autoplay=0"} 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen></iframe>
      <WatchPageContent videoid={videoid}/>
      </div>
        <VideoContainer/>
    </div>
  )
}

export default WatchPage;
