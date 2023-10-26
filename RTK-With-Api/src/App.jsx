import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { apiData } from './Store/Slices/ApiSlice';

function App() {

  const dispatch = useDispatch();
  
  const data = useSelector(state => state.apiData.users)
  console.log('Data ' , data)

  const handleApiData = () => {
    dispatch(apiData())
  }

  return (
    <>
      <h1>Redux Toolkit Api</h1>
      <button onClick={handleApiData}>Click me</button>
      <ul>
        {
          data.map((user) => {
            return (
              <li key={user.id}>{user.name}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default App
