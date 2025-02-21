import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, removeTodo } from "../features/todo/todoSlice";
import { FaCheck } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [myTodos, setMyTodos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myTodos"));
    data && setMyTodos(data);
  }, [todos]);

  console.log(myTodos);

  const checkBoxHandler = (id) => {
    dispatch(updateTodo(id));
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="h-fit max-h-3/2 flex justify-center p-2 bg-white/50 rounded-lg z-10 overflow-y-scroll scrollbar">
      <h2
        className={`place-self-center text-xl font-medium text-gray-800 ${
          myTodos.length === 0 ? "block" : "hidden"
        }`}
      >
        Enter Your Todos
      </h2>
      <ul
        className={`w-64 flex flex-col gap-1 divide-y divide-gray-500 transition-discrete  ${
          myTodos.length !== 0 ? "block" : "hidden"
        }`}
      >
        {myTodos &&
          myTodos.map((todo) => (
            <li key={todo.id} className="flex items-center gap-3 transition">
              <div
                className="relative flex place-items-center"
                onClick={() => checkBoxHandler(todo.id)}
              >
                <input
                  type="checkbox"
                  className={`appearance-none border-2  w-4 h-4 rounded-sm hover:border-green-500 hover:bg-green-200 cursor-pointer ${
                    todo.isCheck
                      ? "border-green-500 bg-green-200"
                      : "border-gray-400 bg-none"
                  }`}
                />
                <FaCheck
                  className={`absolute text-green-500 left-0.5 cursor-pointer animate-pop ${
                    todo.isCheck ? "block" : "hidden"
                  }`}
                />
              </div>

              <div className="w-full flex justify-between px-2 py-1.5 text-gray-800">
                <p>{todo.text}</p>
                <button
                  className="text-xl font-light text-rose-500 flex place-items-center cursor-pointer"
                  onClick={() => removeTodoHandler(todo.id)}
                >
                  <MdOutlineCancel />
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
