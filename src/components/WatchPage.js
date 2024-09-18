import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { notshowsidebar } from '../constants/SidebarSlice';

const WatchPage = () => {
        const dispatch=useDispatch();
        useEffect(()=>{
                dispatch(notshowsidebar());
        },[])

return (
    <div className=''>
      watch page
    </div>
  )
}

export default WatchPage;
