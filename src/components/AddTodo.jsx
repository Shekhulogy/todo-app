import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { MdAdd } from "react-icons/md";

export const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (value !== "") {
      dispatch(addTodo(value));
    } else {
    }
    setValue("");
  };
  return (
    <div className="h-20 min-h-20 flex justify-center items-center bg-white/50 rounded-lg z-10">
      <form
        action=""
        onSubmit={addTodoHandler}
        className="w-full h-full flex justify-evenly items-center"
      >
        <input
          className="h-4 w-fit border border-gray-300 rounded-md bg-white/55 focus:outline-2 focus:outline-white/70 placeholder:text-gray-400 placeholder:font-light px-3 py-4 transition-discrete"
          type="text"
          placeholder="Enter Todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="h-5 rounded-md bg-green-100 border border-green-500 px-2 py-4 flex place-items-center text-green-500 text-lg cursor-pointer hover:bg-green-200 hover:border-2"
          type="button "
        >
          <MdAdd />
        </button>
      </form>
    </div>
  );
};
