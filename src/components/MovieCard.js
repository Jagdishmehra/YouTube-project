import React from 'react'
import { IMG_LIST_URL } from '../constants/Images'
import { IoLogoLinkedin } from 'react-icons/io'
import { BiLogoGithub } from 'react-icons/bi'

const MovieCard = ({movie}) => {
    console.log(movie)
    function handleViews(num){
        if(num>=1000000) return ((num/1000000).toFixed(1)+'M')
                  else if(num>=1000&&num<10000000) return((num/1000).toFixed(0)+'K')
                else return num;
              };
  return (
    <div className='my-4 ml-2 w-[18.5rem] cursor-pointer'>
        <img alt='movieimg' className='rounded-lg h-52 w-full hover:scale-[1.01] transition-transform duration-200 ease-out'
        src={IMG_LIST_URL+movie.poster_path}/>
        <div className='flex'>
          <div className='flex-col m-2'>
          <BiLogoGithub className='text-3xl hover:scale-105 mb-1' />
        <IoLogoLinkedin className='text-3xl hover:scale-105'/>
        </div>
        <ul className='mx-2'>
        <li className='mt-2 overflow-hidden'>{movie.title}</li>
        <li className='font-thin text-sm'>{movie.release_date}</li>
        <li className='flex font-thin text-sm'>{handleViews(movie.id)} views</li>
</ul>
</div>
</div>
  )
}

export default MovieCard
