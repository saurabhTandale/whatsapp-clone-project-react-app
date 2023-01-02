import React, { useState } from 'react'
import Chats from './Chats'
import RoundedBtn from './Common/RoundedBtn'
import { MdPeople } from 'react-icons/md'
import { TbCircleDashed } from 'react-icons/tb'
import { BsFillChatLeftFill } from 'react-icons/bs'
import { HiDotsVertical } from 'react-icons/hi'
import { BiFilter } from 'react-icons/bi'
import { pp } from '../assets/whatsapp';

function LeftMenu() {

  const [filter, setFilter] = useState(false);


  return (
    // LeftMenu Container 

    <div className='flex flex-col border-r border-neutral-700 w-100  h-screen'>
       {/* Prfile Nav   */}
        <div className='flex justify-between items-center bg-[#202d33] h-[60px] p-3'>
            {/* profile pic  */}
            <img src={pp} alt="profile-picture" className='rounded-full w-[40px]' />


            {/* Profile nav buttons  */}
       <div className='flex justify-between w-[175px]'>
          <RoundedBtn icon={ <MdPeople />}   />
          <RoundedBtn icon={ <TbCircleDashed /> } />
          <RoundedBtn icon={ <BsFillChatLeftFill /> } />
         <RoundedBtn icon={ <HiDotsVertical /> } />
       </div>
        </div>


       {/* Search And Filter  */}
      
      <div className='flex justify-between items-center h-[60px] p-2'>
      {/* Search input  */}
         <input type="text" 
          placeholder='Search or start a new chat'
          className='rounded-lg bg-[#202d33] text-[#8796a1] text-sm outline-none px-4 py-2 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light'

         />

         {/* Filter Button  */}
        <button className={`text-2xl m-2 p-1 rounded-full ${filter
            ? "bg-emerald-500 text-white rounded-full hover:bg-emerald-700"
            : "text-[#8796a1] hover:bg-[#3c454c]"
          }`}
          onClick={() => setFilter(!filter)}>
          <BiFilter />
         </button>
      </div>
      
       
       {/* Chats  */}
       <Chats />

    </div>

  )
}

export default LeftMenu