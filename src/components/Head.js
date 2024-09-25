import { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { LOGO_URL, YOUTUBE_SEARCH_API } from '../constants/Images';
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { togglesidebar } from '../constants/SidebarSlice';
import { cacheSearch } from '../constants/SearchSlice';
import { filterdata } from '../constants/FilterSlice';

      const Head = () => { 
        const filtersearch=useSelector(store=>store.setVideoData.videos)
        const cachedres=useSelector(store=>store.cacheData)
        const [inputvalue,setinputvalue]=useState('') 
        const[searchresults,setsearchresults]=useState([]);
        const [showsuggestions,setshowsuggestions]=useState(false);
          // console.log(inputvalue);
          
          const searchsuggestions=async()=>{
            const data=await fetch(YOUTUBE_SEARCH_API+inputvalue)
            const json=await data.json()
            setsearchresults(json[1])
            dispatch(cacheSearch({
              [inputvalue]:json[1]
            }))
            //console.log(json[1]);
          }
          useEffect(()=>{
           const result= setTimeout(() =>{
            if(cachedres[inputvalue]){
              setsearchresults(cachedres[inputvalue])
            }
            else{
              searchsuggestions()
            }
           
          }, 200)
           return ()=>{
            clearTimeout(result);
           }
          },[inputvalue])

          const dispatch=useDispatch();
          const handleSideBar=()=>{
                  dispatch(togglesidebar());
          };
        return (
          <div className='flex justify-between'>
      <div className='flex'>
      <button className='ml-4 mt-1 mb-3 px-3 rounded-full hover:bg-gray-200 transition-all duration-200' 
      onClick={handleSideBar}><RxHamburgerMenu 
      className='text-xl  hover:cursor-pointer' /></button>
      <a href="/"><img className='w-32 h-16 -my-1  hover:cursor-pointer' alt='logo' src={LOGO_URL}/></a>
      </div>
      <div className='w-[45%] '>
          <form onSubmit={(e)=>e.preventDefault()}
          className='flex w-full'>
              <input type='text' 
              value={inputvalue}
              onChange={(e)=>setinputvalue(e.target.value)}
              placeholder='Search'
              onFocus={()=>setshowsuggestions(true)}
              onBlur={()=>setshowsuggestions(false)}
              className='outline-none text-lg border border-gray-300 my-2 py-2 px-4 font-light w-[90%] rounded-l-3xl'/>
              <button  onClick={()=>{
                const filterresult=filtersearch.filter((v)=>v.snippet.title.toLowerCase().includes(inputvalue.toLowerCase()))
                dispatch(filterdata(filterresult))
                //console.log(filterresult);
              }}
              className='bg-gray-100 hover:bg-gray-200 my-2 px-4 rounded-r-3xl border border-gray-300  border-l-transparent '>
              <CiSearch className='text-2xl p-0' /></button>
          </form>
          {showsuggestions&&<div className='bg-white absolute z-10 w-[37rem] ml-1 rounded-xl py-4 border border-gray-100 shadow-lg'>
                <ul>{searchresults.map((s)=><li key={s}
                className='hover:bg-gray-100 p-2 flex items-center'>
                  <CiSearch className='text-2xl pr-1' />{s}</li>)}
                </ul>
              </div>}
      </div>
      <div className='flex justify-between'>
      <IoNotificationsOutline className='text-2xl my-5 hover:bg-gray-200 rounded-3xl cursor-pointer' />
      <button  
      className='flex items-center mx-6 bg-gray-100 my-2.5 rounded-3xl px-4 hover:bg-gray-200 transition-all duration-100'>
        <CgProfile className='mr-2 text-xl' />Sign In</button>
      </div>
          </div>
        )
      }

      export default Head
