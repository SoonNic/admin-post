import React from 'react'
import Logo from '../../../public/Images/logo.png'

const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[400px] min-h-[600px]'>

        <div className='w-full flex justify-center'>
          <div className='w-[80px] min-h-[100px]'>
            <div className='w-[80px] h-[80px]'>
              <img src={Logo} alt="logo" className='w-full h-full object-cover'></img>
              <h1 className='text-center text-[16px] font-semibold'>ຂາໄກ່ເຈ້ນິກ</h1>
            </div>
          </div>
        </div>

        <div className='w-full bg-white border border-gray-200 rounded-md mt-[20px] p-[14px]'>

          <h2 className='text-center text-[24px] font-bold mt-[8px]'>Login</h2>
          <p className='mt-[32px]'>Username</p>

          <input className='w-full border border-gray-200 rounded-[6px] py-[8px] px-[8px] focus:outline-none' type='text' />
          <p className='mt-[20px]'>Password</p>
          <input className='w-full border border-gray-200 rounded-[6px] py-[8px] px-[8px] focus:outline-none' type='password' />

          <div className='w-full flex items-center mt-[8px] gap-2'>
            <input className='w-[16px] h-[16px]' type="checkbox" id="remember" name="remember" />
            <label>Remember me</label>
          </div>

          <button className='w-full bg-green-500 py-[8px] rounded-md text-white mt-[20px]'>Login</button>

        </div>


      </div>
    </div>
  )
}

export default Login
