import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './chatHeader.css'
import { activeContext } from '../Context/account';

const MessageHeader = (props) => {
    let [openChatMenu, setOpenChatMenu] = useState(false);
    let {activeChat} = useContext(activeContext);

  return (
    <div className='bg-[#f0f2f5] flex items-center py-[10px] px-[16px]'>
        <div className='w-[45px] h-[45px] overflow-hidden object-contain rounded-full cursor-pointer'>
            <img src={activeChat.imageUrl} alt="" />
        </div>
        <div className='flex-1 ml-4'>
            {activeChat.name}
        </div>
        <div className=' flex items-center justify-center'>
            <button className='rounded-full p-2 focus:bg-[#D9DBDF] ml-3'>
                <SearchIcon className='text-gray-600'/>
            </button>
            <button className='ml-4 rounded-full p-2 focus:bg-[#D9DBDF] relative' onClick={()=>{
                setOpenChatMenu(prev=>!prev)
            }}>
                <MoreVertIcon className='text-gray-600' />
                {openChatMenu && 
                    <div className='profile-section bg-white w-48 py-4 rounded-md origin-top-left absolute top-[104%] right-[2%] shadow-md text-gray-600 '>
                        <div className='hover:bg-[#F5F6F6] px-2 py-4 text-left' onClick={()=>{
                            console.log('hello');
                            props.setActive();
                        }}>
                            &nbsp;&nbsp; Close Chat
                        </div>
                    </div>
                }
            </button>
        </div>
    </div>
  )
}

export default MessageHeader