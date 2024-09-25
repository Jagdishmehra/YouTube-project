import React from 'react'

const ButtonsList = () => {

  const btnlist=["All","Cricket","Kapil sharma show","Live","Game Show","Satsang","Indian-pop music","Video","English","Mixes","Router","Coding","Programming","English-latest-hits"]
  return (
    <div className='mx-4 w-full'>
      <div className='flex whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide'>
        {btnlist.map((btn)=><div key={btn} className='mx-3 my-2 font-bold text-sm cursor-pointer rounded-lg p-2 bg-gray-200 hover:bg-gray-300 transition-all duration-150'>{btn}</div>) }
      </div>
    </div>
  )
}

export default ButtonsList;
