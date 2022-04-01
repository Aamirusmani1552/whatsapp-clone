import React, { useContext, useEffect} from 'react'
import './chatHeader.css'
import { activeContext } from "../Context/account"
import { userContext } from '../Context/context'
import Pusher from "pusher-js";
import * as timeago from 'timeago.js';

const MessageChats = () => {
  let {msgs,setMsgs,conversationId,activeChat} = useContext(activeContext)
  let {user} = useContext(userContext)

  console.log('this is active chat content',activeChat,conversationId)
  console.log('this is the conversation id and info',conversationId,user)

  useEffect(()=>{
    const pusher = new Pusher("818e85e690a5d264c447", {
      cluster: "ap2",
    });
    const channel = pusher.subscribe("message");
    channel.bind('inserted',(data)=>{
      setMsgs(prev=> [...prev,data]);
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[msgs]);


  const style = {
    senderStyles: 'px-2 py-1 rounded my-1 self-end bg-[#D9FDD3] max-w-sm  h-auto w-fit break-words',
    recieverStyles: 'bg-white  px-2 py-1 rounded my-1 self-start max-w-sm  h-auto w-fit break-words'
  }
  return (
    <div  className='message-section flex-1 px-10 py-4 flex flex-col overflow-y-scroll'>
      {msgs && msgs.map((msg,index)=>{
        return (
          <div className={user.googleId === msg.senderId ? style.senderStyles : style.recieverStyles} key={msg._id}>
            <p>{msg.message}</p>
            <span className='text-xs text-gray-500'>{timeago.format(msg.createdAt)}</span>
          </div>
          )
      })}
    </div>
  )
}

export default MessageChats