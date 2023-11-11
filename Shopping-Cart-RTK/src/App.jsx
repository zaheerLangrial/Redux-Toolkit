import './App.css'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import {Provider} from 'react-redux'
import store from './store/Store'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
