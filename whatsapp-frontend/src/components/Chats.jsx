import React, { useEffect } from 'react'
import SingleChat from './SingleChat'
import { useContext } from 'react'
import { userContext } from '../Context/context'
import { createChat, getAllUsers,getMessages } from '../apiCalls'
import { activeContext } from "../Context/account"

const Chats = (props) => {
  let {user, chats, setChats} = useContext(userContext);
  let {setActiveChat,setConversationId,setMsgs ,socket} = useContext(activeContext);
  
  useEffect(async function(){
    let allChats = await getAllUsers();
    setChats(allChats.users.filter(val=>{
      return user.googleId !== val.googleId;
    }));
  },[]);

  function chatSetter(value){
    setActiveChat(value);
  }

  async function createConversation(id){
    let convId = await createChat({
      senderId: user.googleId,
      recieverId: id 
    });
    setConversationId(convId);
    let totalMessages = await getMessages(convId.users._id)
    setMsgs(totalMessages)
  }


  return (
    <div className='chat-section flex-1 flex flex-col overflow-y-scroll'>
      {
        Array.from(chats).map((val,index)=>{
          return <SingleChat key={index} value={val} chatSetter={chatSetter}  createConversation={createConversation}/>
        })
      }
    </div>
  )
}

export default Chats