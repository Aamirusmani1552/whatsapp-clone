import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import Chats from './Chats'
import ChatSearch from './ChatSearch'
import Profile from './Profile'


const Chat = () => {
  let [searchVal,setSearchVal] = useState('');
  return (
    <div className='w-[440px] relative flex flex-col'>
        <ChatHeader />
        <ChatSearch searchVal={searchVal} setSearchVal={setSearchVal} />
        <Chats searchVal={searchVal} />
        <Profile />
    </div>
  )
}

export default Chat