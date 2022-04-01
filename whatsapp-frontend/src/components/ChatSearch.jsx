import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const ChatSearch = (props) => {
  return (
    <div className='border-x-[#F0F2F5] border-b-[1px] px-[16px] py-[10px]'>
      <div className=' h-35px bg-[#f0f2f5] flex items-center  py-[3px] px-3 rounded-md'>
        <button className='w-7 flex items-center justify-start text-gray-500'>
          <SearchIcon/>
        </button>
        
        <input type={'text'} value={props.searchVal} onChange={(e)=>{
            props.setSearchVal(e.target.value);
          }}
          className='text-gray-500 h-full flex-1 outline-none bg-[#f0f2f5] ml-4 text-sm' 
          placeholder='Search or start a new chat'
        />
      </div>
    </div>
  )
}

export default ChatSearch