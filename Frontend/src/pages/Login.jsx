import React, { useState } from 'react'
import logo from "../assets/logo.jpg"
import google from "../assets/google.jpg"
import { IoEye, IoEyeOutline } from "react-icons/io5"
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from "react-spinners"
import axios from "axios"
import {serverUrl} from "../App"
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/useSlice'

const Login = () => {
  const [show, setShow] = useState(false) 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = async () => {
    setLoading(true)
    try {
      const result = await axios.post(serverUrl + "/api/auth/login", {email, password}, {withCredentials: true})
      dispatch(setUserData(result.data))
      toast.success("Login successful")
      setLoading(false)
      navigate("/")
    } catch (error) {
      console.log(error);
      setLoading(false)
      toast.error(error.response.data.message)
    }
  }
    return (
      <div className='bg-[#dddbdb] w-[100vw] h-[100vh] flex items-center justify-center' >
        <form className='w-[90%] md:w-200 h-150 bg-white shadow-xl rounded-2xl flex' onSubmit={e => e.preventDefault()}>
          <div className='md:w-[50%] w-[100%] h-[100%] flex flex-col items-center justify-center gap-3'>
            <div>
              <h1 className='font-semibold text-black text-2xl'>Welcome back</h1>
              <h2 className='text-[#999797] text-[18px]'>Log in to your account</h2>
            </div>
            <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
              <label htmlFor="email" className='font-semibold'>Email</label>
              <input id='email' type="text" className='border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]' placeholder='Enter your email' onChange={e => setEmail(e.target.value)} value={email} />
            </div>
            <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3 relative'>
              <label htmlFor="password" className='font-semibold'>Password</label>
              <input id='password' type={show ? "text" : "password"} className='border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]' placeholder='Enter your password' onChange={e => setPassword(e.target.value)} value={password} />
              { !show ? 
                <IoEyeOutline className='absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev=>!prev)} /> : 
                <IoEye className='absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev=>!prev)} />
              }
            </div>
            <button className='w-[80%] h-[40px] bg-black text-white cursor-pointer flex items-center justify-center rounded-[5px]' disabled={loading} onClick={handleLogin}>{ loading ? <ClipLoader size={30} color='white' /> : "Login"}</button>
            <span className='text-[13px] cursor-pointer text-[#585757]' onClick={()=>navigate("/forget")}>Forgot password ?</span>
            <div className='w-[80%] flex items-center gap-2'>
              <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'></div>
              <div className='w-[50%] text-[15px] text-[#6f6f6f] flex items-center justify-center'>or continue</div>
              <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'></div>
            </div>
            <div className='w-[80%] h-[40px] border-1 border-black rounded-[5px] flex items-center justify-center cursor-pointer'>
              <img src={google} className='w-[25px]' alt="" />
              <span className='text-[18px] text-gray-500'>oogle</span>
            </div>
            <div className='text-[#6f6f6]'>
            Create new account
            <span className='underline underline-offset-1 text-black' onClick={()=>navigate("/signup")}>Signup</span>
          </div>
          </div>
          <div className='w-[50%] h-[100%] rounded-r-2xl bg-[black] md:flex items-center justify-center flex-col hidden'>
            <img src={logo} alt="logo" className='w-30 shadow-2xl' />
            <span className='text-2xl text-white'>AI LMS</span>
          </div>
        </form>
      </div>
    )
}

export default Login