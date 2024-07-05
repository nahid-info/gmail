import React, { useRef } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import image from '../assets/img.jpg'
import { FaAngleDown } from 'react-icons/fa'

const Login = () => {

  const { setGmail } = useOutletContext()

  const navigate = useNavigate()

  const mail = useRef()

  console.log(typeof (setGmail))

  const handleSubmit = (e) => {
    e.preventDefault()
    setGmail(mail.current.value)
    navigate('/password')
  }

  return (
    <div className='app-container h-screen flex flex-col md:gap-4 justify-between md:justify-center items-center bg-blue-50'>
      <div className='main-box md:w-[70%] md:h-[65%] p-10 bg-white rounded-3xl'>

        <div className='first-part flex justify-between'>
          <ul className=' flex flex-col gap-5 '>
            <li><img src={image} alt='logo' className='w-16' /></li>
            <li><h2 className=' text-4xl'>Sign in</h2></li>
            <li><p>Use your Google Account</p></li>
          </ul>

          <form onSubmit={handleSubmit} className='part-two flex flex-col gap-10 pt-16 h-full pb-10'>
            <div>
              <div className='for-input relative h-[55px] '>
                <input ref={mail} type="text" className='border-[1px] border-stone-700 md:w-full w-[80%] h-full rounded-md' placeholder='Email or phone' required />
              </div>
              <p className='text-blue-700 font-medium text-sm pt-2 cursor-pointer'>Forgot email!</p>
            </div>
            <div className='text-sm'>
              <p>Not your computer? Use Guest mode to sign in privately.</p>
              <p className='text-blue-800 font-medium text-md'>Learn more about using Guest mode</p>
            </div>
            <div className=' login-part flex justify-end gap-10 items-center '>
              <p className=' text-blue-600 font-medium cursor-pointer'>Create account</p>
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
  )
}

export default Login