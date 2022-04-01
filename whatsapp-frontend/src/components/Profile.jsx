import React, { useContext } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { userContext } from '../Context/context'

const Profile = () => {
    let {user,profile,setProfile} = useContext(userContext)
    let sectionStyle = {
        styles: 
        profile ? 
         'absolute duration-500 border-2 flex flex-col w-full h-full bg-white left-[0%]'
        :
        'absolute duration 500 border-2 flex flex-col w-full h-full bg-white left-[-100%]'
    }
  return (
    <div className={sectionStyle.styles}>
        <header className='h-[108px] bg-[#008069] text-white flex p-8 items-end pb-4 pl-4'>
            <button className='mr-6 text-xl' onClick={()=>setProfile(prev=>!prev)}>
                <ArrowBackIcon />
            </button>
            <h1 className='text-xl font-semibold'>Profile</h1>
        </header>
        <div className='w-full h-64 flex items-center justify-center bg-[#F0F2F5]'>
            <div className='w-48 rounded-full overflow-hidden'>
                <img src={user.imageUrl} alt="" className='w-full'/>
            </div>
        </div>
        <div className='h-[100px] px-10 py-2 flex flex-col justify-center'>
            <p className='text-sm text-[#81C0B8] font-semibold'>Your Name</p>
            <p>
                {user.givenName + ' ' + user.familyName}
            </p>
        </div>
        <div className='flex-1 items-center justify-center text-gray-400 font-semibold px-10 py-4 bg-[#f0f2f5] flex'>
            <p className='text-sm'>
                This is not your username of pin. This name will be visible to your WhatsApp contacts.
            </p>
        </div>
    </div>
  )
}

export default Profile