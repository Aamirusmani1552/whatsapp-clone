import React, { useContext, useState } from 'react'
import MessageChats from './MessageChats'
import MessageHeader from './MessageHeader'
import MessageCreater from './MessageCreater'
import { activeContext } from '../Context/account'
import noChatLogo from '../images/intro.jpg'
import {userContext} from '../Context/context';
import { newMessage } from '../apiCalls'

const Message = () => {
  let [value,setValue] = useState('');
  let {activeChat,setActiveChat,conversationId } = useContext(activeContext);
  let {user} = useContext(userContext);


  function setActive(){
    setActiveChat(null)
  }

  async function createMessage(e){
    if(e.keyCode === 13){
      if(!value) return;
      let message = await newMessage({senderId: user.googleId, recieverId: activeChat.googleId, message: value, conversationId: conversationId.users._id})
      console.log(message)
      setValue('');
    }
  }


  return (
    <div className='flex-1 flex flex-col '>
      {activeChat ?
        <>
          <MessageHeader setActive={setActive} />
          <MessageChats />
          <MessageCreater value={value} setValue={setValue} createMessage={createMessage}/>
        </>
        :
        <div className='flex flex-col items-center justify-center h-full bg-[#F8F9FB] text-gray-500 py-10 px-24 text-center'>
          <div className='h-64 object-contain w-64'>
            <img src={noChatLogo} alt="" />
          </div>
          <h1 className='text-3xl font-extralight py-5'>Keep your phone connected</h1>
          <p className='border-b-[1px] pb-6 font-sm'>Whatsapp connects to your phone for sync messages. To reduce data usage connect your phone to wifi.</p>
          
          <p className='py-5 font-sm'>Make calls from windows from whatsapp for windows.<span className='text-[#008069]'> Get it here</span></p>
        </div>
      }
    </div>
  )
}

export default Message