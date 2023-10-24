import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/TodoSlice/TodoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput('')
  };
  return (
    <div className=" w-full">
      <form
        onSubmit={addTodoHandler}
        className=" max-w-5xl mx-auto flex flex-col space-y-3 justify-center items-center"
      >
        <h1 className="text-5xl font-bold">Add Todo</h1>
        <input
          type="text"
          placeholder="Enter Something....."
          className=" outline-none border px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
