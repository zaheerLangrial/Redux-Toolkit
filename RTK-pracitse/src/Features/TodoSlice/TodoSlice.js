import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id : 1 , text : 'Hello I am Zaheer.'}]
}

export const TodoSlice = createSlice ({
    name : 'Todo',
    initialState,
    reducers : {
        addTodo : (state , action ) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            const editedTodo = state.todos.find((todo) => todo.id === action.payload);
            if (editedTodo) {
              // Assuming action.payload contains the new text for the edited todo.
              editedTodo.text = action.payload;
            }
          },
    }
})

export const {addTodo , removeTodo , editTodo} = TodoSlice.actions
export default TodoSlice.reducer