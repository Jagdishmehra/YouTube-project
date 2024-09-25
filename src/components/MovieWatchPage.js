import { useEffect, useState } from 'react'
import { useDispatch,} from 'react-redux'
import { notshowsidebar } from '../constants/SidebarSlice';
import { useSearchParams } from 'react-router-dom';
import { options } from '../constants/Images';
import MoviePage from './MoviePage';

const MovieWatchPage = () => {
  const[searchParams]=useSearchParams();
  const [key,setkey]=useState(null)
    
    const videodata=async()=>{
      const videoid=searchParams.get('v');
      const data= await fetch(`https://api.themoviedb.org/3/movie/${videoid}/videos`, options)
      const json=await data.json()
      const maindata=json.results.filter((v)=>v.type==="Trailer")
      const trailer=maindata.length?maindata[0]:json.results[0];
        setkey(trailer.key)

    }
    useEffect(()=>{
      videodata()
    },[])
          const dispatch=useDispatch();
          useEffect(()=>{
                  dispatch(notshowsidebar());
          },[])
  
  return (
    <div className='flex justify-between w-full h-screen overflow-y-scroll'>
      <div className='mt-5 ml-2'>
        <iframe className='rounded-2xl'
        width="950" 
        height="495.56" 
        src={"https://www.youtube.com/embed/"+key+"?autoplay=1"} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
        </div>
        <div className='mt-2 ml-4'><MoviePage/></div>
         
      </div>)
}

export default MovieWatchPage
