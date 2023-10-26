import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../store/slices/UserSlices'

function EditUser() {
  const navigate = useNavigate()
  const {id} = useParams()
  const dispatch = useDispatch();

  const data = useSelector(state => state.user)
  const currUser = data.filter((user) => user.id == id)
  const {name , email} = currUser[0];

  const [uName , setuName] = useState(name);
  const [uEmail , setuEmail] = useState(email);
  
  const editHandleData = (e) => {
    e.preventDefault();
    dispatch(editUser({
      id : id , 
      name : uName , 
      email : uEmail}))
    navigate('/')
  }
  return (
    <div className=' w-full'>
        <form onSubmit={editHandleData} className=' max-w-3xl mx-auto px-5 flex flex-col justify-center items-center h-screen space-y-3'>
            <h1 className=' text-center text-3xl font-bold'>Update User</h1>
            <input type="text" className='border-b w-80 outline-none px-1' placeholder='Add User Name....' value={uName} onChange={(e) => setuName(e.target.value)}/>
            <input type="text" className='border-b w-80 outline-none px-1' placeholder='Add User Email....' value={uEmail} onChange={(e) => setuEmail(e.target.value)}/>
            <Button child='Update' className='w-80' type='submit'/> 
        </form>
    </div>
  )
}

export default EditUser