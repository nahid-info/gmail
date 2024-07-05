import React, { useRef, useState } from 'react'
import image from '../assets/img.jpg'
import { FaAngleDown, FaUserCircle } from 'react-icons/fa'
import { useOutletContext } from 'react-router-dom'


const Pass = () => {

  const checkBox = useRef()

  const { gmail } = useOutletContext()

  const [showPass, setShowPass] = useState()

  const pass = useRef()

  const handleClick = () => {
    if (checkBox.current.checked) {
      setShowPass(true)
    } else {
      setShowPass(false)
    }
  }

  const submitPass = (e) => {
    e.preventDefault()
    pass.current.value = ''
  }

  return (
    <div className=' app-container h-screen flex flex-col md:gap-4 justify-between md:justify-center items-center bg-blue-50'>
      <div className='main-box md:w-[70%] md:h-[65%] sm:p-10 bg-white rounded-3xl'>

        <div className='first-part flex justify-between'>
          <ul className=' flex flex-col gap-5 '>
            <li><img src={image} alt='logo' className='w-16' /></li>
            <li><h2 className=' text-4xl'>Welcome</h2></li>
            <li className='cursor-pointer flex max-w-60 sm:w-full gap-2 items-center text-stone-600 border-[1px] p-1 rounded-3xl border-stone-400'><FaUserCircle className='text-2xl' />
              <p className=' text-sm font-medium'>{gmail}</p>
              <FaAngleDown className=' relative top-[1px] right-1' />
            </li>
          </ul>

          <form onSubmit={submitPass} className='part-two flex flex-col gap-10 pt-16 h-full pb-10'>
            <div>
              <div className='for-input relative h-[55px] '>
                <input ref={pass} type={`${showPass ? 'text' : 'password'}`} className='pass-input border-[1px] border-stone-700 md:min-w-[400px] h-full rounded-md' placeholder='Enter your password' required />
              </div>
              <label onClick={handleClick} className='flex items-center gap-2 mt-4 font-medium text-md cursor-pointer'>
                <input ref={checkBox} type='checkbox' className='inline-block w-5 h-5' /> <p className='inline-block flex-1'>Show password</p>
              </label>
            </div>
            <div className='hidden text-sm'>
              <p>Not your computer? Use Guest mode to sign in privately.</p>
              <p className='text-blue-800 font-medium text-md'>Learn more about using Guest mode</p>
            </div>
            <div className=' login-part flex justify-end gap-10 items-center '>
              <p className=' text-blue-600 font-medium cursor-pointer'>Forgot password?</p>
              <button type='submit' className=' w-20 h-10 bg-blue-600 rounded-3xl text-white font-medium'>Next</button>
            </div>
          </form>
        </div>

      </div>
      <div className='footer flex justify-between w-[70%] py-5 md:py-0 px-3 text-sm text-stone-600'>
        <h2 className=' flex items-center gap-2'>English (United Kingdom) <FaAngleDown /></h2>
        <ul className=' flex gap-5'>
          <li>Help</li>
          <li>Privacy</li>
          <li>Term</li>
        </ul>
      </div>
    </div>





    // <div className='part-two flex flex-col gap-10 pt-16 h-full pb-10'>
    //   <div>
    //     <div className='for-input relative h-[55px] '>
    //       <input type="text" className='pass-input border-[1px] border-stone-700 md:min-width[400px] h-full rounded-md' placeholder='Email or phone' required />
    //     </div>
    //     <p className='text-blue-700 font-medium text-sm pt-2'>Forgot email!</p>
    //   </div>
    //   <div className='hidden text-sm'>
    //     <p>Not your computer? Use Guest mode to sign in privately.</p>
    //     <p className='text-blue-800 font-medium text-md'>Learn more about using Guest mode</p>
    //   </div>
    //   <div className=' login-part flex justify-end gap-10 items-center '>
    //     <p className=' text-blue-600 font-medium'>Create account</p>
    //     <button type='submit' className=' w-20 h-10 bg-blue-600 rounded-3xl text-white font-medium'>Next</button>
    //   </div>
    // </div>
  )
}

export default Pass