import React, { useState } from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { addNewUser } from '../store/slices/UserSlices';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

function AddNewUser() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const data = useSelector(state => state.user)

    const formDataHandler = (e) => {
        e.preventDefault();
        dispatch(addNewUser({id: data.length + 1 , name , email})) 
        navigate('/') 
    }
  return (
    <div className=' w-full'>
        <form onSubmit={formDataHandler} className=' max-w-3xl mx-auto px-5 flex flex-col justify-center items-center h-screen space-y-3'>
            <h1 className=' text-center text-3xl font-bold'>Add New User Details</h1>
            <input type="text" className='border-b w-80 outline-none px-1' placeholder='Add User Name....' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" className='border-b w-80 outline-none px-1' placeholder='Add User Email....' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Button child='Add' className='w-80' type='submit'/> 
        </form>
    </div>
  )
}

export default AddNewUser