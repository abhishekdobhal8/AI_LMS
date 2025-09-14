import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/useSlice'
import axios from 'axios'
import { serverUrl } from "../App"

const getCurrentUser = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await axios.get(serverUrl + "/api/user/getcurrentuser", {withCredentials : true})
                dispatch(setUserData(result.data))
                console.log(result.data)
            } catch (error) {
                console.log(error)
                dispatch(setUserData(null))
            }
        }
        fetchUser()
    }, [])
}

export default getCurrentUser