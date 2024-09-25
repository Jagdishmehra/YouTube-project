import React, { useEffect } from 'react'
import {MOVIE_API_KEY, options } from '../constants/Images'
import { useDispatch, useSelector } from 'react-redux'
import { addmovies } from '../constants/MovieSlice'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

const MoviePage = () => {
    const moviedata=useSelector(store=>store.movies)
    const dispatch=useDispatch()

    const getmovies=async()=>{
        let curr=1;
        while(curr<10){
        const data=await fetch(`${MOVIE_API_KEY}&page=${curr}`,options)
        const json=await data.json()
                dispatch(addmovies(json.results))
                curr+=1
    }       
    }
useEffect(()=>{
    getmovies()
},[])

  return (
   <div className='flex flex-wrap  w-full h-screen overflow-auto'>
        {Object.values(moviedata).map((movie)=><Link to={"/watchmovie?v="+ movie.id}key={movie.id}> 
        <MovieCard movie={movie} />
</Link>)}
</div>
  )
}


export default MoviePage
