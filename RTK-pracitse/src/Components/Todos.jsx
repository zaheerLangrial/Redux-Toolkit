import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../Features/TodoSlice/TodoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <p>{todo.text}</p>
              <button onClick={(e) => dispatch(removeTodo(todo.id))}>Del</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Todos