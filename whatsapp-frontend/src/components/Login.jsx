import React from 'react'
import logo from '../images/580b57fcd9996e24bc43c543.png';
import qrcode from '../images/qr-code.png'
import { GoogleLogin } from 'react-google-login';
import { useContext } from 'react';
import { userContext } from '../Context/context';
import { createUser } from '../apiCalls';


const Login = () => {
    let {setUser} = useContext(userContext)
    const style = {
        loginScreen: 'w-full h-full bg-[#DDDEDC] relative overflow-hidden',
        header: 'flex items-start justify-start h-[222px] back bg-[#00A884] pt-[28px]',
        logoDiv: 'logo text-xl font-semibold flex items-center justify-center ml-24',
        logoImg: 'w-10 ml-[14px]',
        logoP: 'flex items-center text-gray-600 text-white text-sm tracking-wider uppercase ml-[13px]'
    }

    const sectionStyle = {
        section: 'h-full w-full transparent  absolute top-[96px] flex justify-center align center',
        sectionDiv: 'md:w-[914px] pb-[60px] pt-[50px] bg-[white] rounded flex flex-wrap justify-center shadow-lg sm:w-full m-h-[30px]',
        sectionDiv1Child: 'sm:w-full md:w-3/5 my-4',
        sectionH1: 'text-[1.7rem] font-light text-gray-700 mb-[30px]',
        sectionP: 'text-gray-700 sm:text-sm mb-[10px]',
    }
    const clientId = '354930587171-a9qn2i066vte69l06j4gorit4kvsvd96.apps.googleusercontent.com';

    const loginFailure = (res)=>{
        console.log('failed')
        setUser({});
    }

    const loginSuccess = (res)=>{
        console.log('success')
        setUser(res.profileObj)
        createUser(res.profileObj);
    }

  return (
    <div className={style.loginScreen}>
        <header className={style.header}>
            <div className={style.logoDiv}>
                <img src={logo} alt="whatsapp logo" className={style.logoImg} />
                <p className={style.logoP}>WhatsApp Web</p>
            </div>
        </header>
        <section className={sectionStyle.section}>
            <div className={sectionStyle.sectionDiv} >
                <div className={sectionStyle.sectionDiv1Child}>
                    <h1 className={sectionStyle.sectionH1}>To use WhatsApp on your Computer:</h1>
                    <p className={sectionStyle.sectionP}>1.Tap on Google Icon on Qr screen</p>
                    <p className={sectionStyle.sectionP}>2.Login to your Account on google screen</p>
                    <p className='text-green-500'>Need help to get started?</p>
                </div>
                <div className='relative'>
                    <img src={qrcode} alt="qr" className='w-72 h-72' />
                    <GoogleLogin 
                        clientId={clientId}
                        buttonText="Login"
                        onSuccess={loginSuccess}
                        onFailure={loginFailure}
                        isSignedIn={true}
                        cookiePolicy={'single_host_origin'}
                        className={'absolute top-32 left-24'}
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login