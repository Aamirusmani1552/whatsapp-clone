import * as timeago from 'timeago.js';
const SingleChat = (props) => {
  return (
    <div className='flex w-full h-20  p-2 items-center hover:bg-[#F5F6F6] cursor-pointer border-b-[1px] ' onClick={()=>{
        props.chatSetter(props.value)
        props.createConversation(props.value.googleId);
      }
      } >
      <div className='w-12 h-12 border-2 rounded-full overflow-hidden object-contain'>
        <img src={props.value.imageUrl} alt="profile" />
      </div>
      <div className='flex-1 ml-3 text-ellipsis overflow-hidden'>
        <p className='text-lg'>{props.value.name}</p>
        <p className='text-sm'>busy</p>
      </div>
      <div className='w-14 h-full text-gray-600'>
        <small>{timeago.format(Date.now())}</small>
    </div>
  </div>
  )
}

export default SingleChat