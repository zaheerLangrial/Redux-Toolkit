import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAllUsers } from '../Store/slices/userSlice'

function Delete() {
    const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(deleteAllUsers())} className=' bg-red-500 text-white px-3 py-1.5 rounded-md'>Delete All Users</button>
  )
}

export default Delete