import React from 'react'
import Chat from './Chat'
import Message from './Message'


const Messenger = () => {
  return (
    <div className='w-screen h-screen flex'>
        <Chat />
        <Message />
    </div>
  )
}

export default Messenger