import React from 'react'
import MoviePage from './MoviePage'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const BodyMovie = () => {
  return (
    <div className='flex'>
        <SideBar/>
      <Outlet/>

    </div>
  )
}

export default BodyMovie
