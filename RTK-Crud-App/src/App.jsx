import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import AddNewUser from './components/AddNewUser'
import EditUser from './components/EditUser'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addnewuser' element={<AddNewUser/>} />
      <Route path='/edituser/:id' element={<EditUser/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
