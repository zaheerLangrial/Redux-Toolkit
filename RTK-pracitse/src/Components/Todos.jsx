import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editTodo, removeTodo } from '../Features/TodoSlice/TodoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  console.log(todos)
  const dispatch = useDispatch()


  const editHandler = (id) => {
    const TodoForEdit = todos.find((todo) => todo.id === id)
    dispatch(editTodo(TodoForEdit))
  }
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <p>{todo.text}</p>
              <button className=' bg-blue-500 text-white p-3' onClick={(e) => dispatch(removeTodo(todo.id))}>Del</button>
              <button className=' bg-blue-500 text-white p-3 ml-3' onClick={(e) => dispatch(editTodo(todo.id))}>edit</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Todos