import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import {ToastContainer} from "react-toastify"
import getCurrentUser from './customHooks/getCurrentUser'
import Profile from './pages/Profile'
import { useSelector } from 'react-redux'
import ForgetPassword from './pages/ForgetPassword'
import EditProfile from './pages/EditProfile'

export const serverUrl = "http://localhost:8000"

const App = () => {
  getCurrentUser()
  const {userData} = useSelector(state => state.user)
  return (
    <>
    <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={!userData ? <SignUp/> : <Navigate to='/'/> }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={userData ? <Profile/> : <Navigate to='/signup'/>}/>
        <Route path='/forget' element={userData ? <ForgetPassword/> : <Navigate to='/signup'/>}/>
        <Route path='/editprofile' element={userData ? <EditProfile/> : <Navigate to='/signup'/>}/>
      </Routes>
    </>
  )
}

export default App  