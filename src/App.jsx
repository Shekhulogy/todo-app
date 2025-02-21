import React from "react";
import { AddTodo } from "./components/addTodo";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-b from-gray-900 to-gray-600">
      <div className="w-xs h-120 p-3 shadow-lg rounded-lg flex flex-col  gap-y-3  bg-center bg-cover bg-no-repeat bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <h2 className="text-center text-xl font-normal text-white z-10">
          Todo App
        </h2>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};
