import React from 'react'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import LinkIcon from '@mui/icons-material/Link';
import MicIcon from '@mui/icons-material/Mic';

const MessageCreater = ({value, setValue, createMessage}) => {
  return (
    <div className='h-[58px] flex items-center px-4 py-2 bg-[#F0F2F5]'>
      <button className='mx-2 text-gray-600 rounded-full p-2 focus:bg-[#D9DBDF]'>
        <SentimentVerySatisfiedIcon />
      </button>
      <button className='mr-2 text-gray-600 rounded-full p-2 focus:bg-[#D9DBDF] rotate-[-45deg]'>
        <LinkIcon />
      </button>
      <div className='flex-1 h-full rounded-lg px-2 py-2 overflow-hidden bg-white'>
        <input type="text" 
              className='h-full w-full outline-none'
              value={value}
              onChange={(e)=>{
                setValue(e.target.value);
              }}
              onKeyDown={(e)=>{
                createMessage(e);
              }}
        />
      </div>
      <button className='ml-4 text-gray-600 rounded-full p-2 focus:bg-[#D9DBDF]'>
        <MicIcon />
      </button>
    </div>
  )
}

export default MessageCreater