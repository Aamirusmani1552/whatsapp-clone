import React, { useState } from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GoogleLogout } from 'react-google-login'
import './chatHeader.css';
import { useContext } from 'react';
import { userContext } from '../Context/context';
import {activeContext}  from '../Context/account'

const ChatHeader = () => {

let [open,setOpen] = useState(false);
let {setActiveChat} = useContext(activeContext)
let {user,setUser,setProfile} = useContext(userContext);

  const logoutFailure = ()=>{
    console.log('failed');
}

const openSettings = ()=>{
  setOpen(prev=>!prev);
}

const logoutSuccess = ()=>{
    console.log('success')
    setUser();
    setActiveChat(null)
}

const clientId = '354930587171-a9qn2i066vte69l06j4gorit4kvsvd96.apps.googleusercontent.com';

  return (
    <div className='bg-[#f0f2f5] flex items-center py-[10px] px-[16px]'>
      <div className='w-[45px] h-[45px] overflow-hidden object-contain rounded-full border-2 cursor-pointer' onClick={()=>setProfile(prev=>!prev)}>
        <img src={user.imageUrl} alt="" />
      </div>
      <div className='ml-auto text-gray-500 flex '>
        <button className='p-2 rounded-full focus:bg-[#D9DBDF]'>
          <ChatIcon className='text-[1.2rem]'/>
        </button>
        <div className='relative ml-4'>
          <button className='rounded-full p-2 focus:bg-[#D9DBDF]' onClick={openSettings}>
            <MoreVertIcon />
          </button>
          {open ?
            <div className='profile-section absolute capitalize bg-white w-[200px] py-6 flex flex-col rounded top-[104%] right-[2%] shadow-md'>
              <div className='w-full text-left hover:bg-[#F5F6F6] p-2' onClick={()=>{
                setProfile(prev=>!prev);
                setOpen(prev=>!prev);
              }}>&nbsp;&nbsp;profile
              </div>
              <div className='w-full text-left hover:bg-[#F5F6F6] p-2'>&nbsp;&nbsp;
                <GoogleLogout
                  clientId={clientId}
                  buttonText="Logout"
                  onLogoutSuccess={logoutSuccess}
                  onLogoutFailiure={logoutFailure}
                  className='w-full'
                >
                </GoogleLogout>
              </div>
            </div>
            : <></>
          }
        </div>
      </div>
    </div>
  )
}

export default ChatHeader