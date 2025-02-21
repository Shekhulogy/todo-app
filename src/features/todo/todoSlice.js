import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, //object destructuring
        isCheck: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    checkTodo: (state, action) => {
      const selectedTodos = state.todos.filter(
        (todo) => todo.id === action.payload
      );
      selectedTodos.map((todo) => {
        todo.isCheck ? (todo.isCheck = false) : (todo.isCheck = true);
      });
    },
  },
});

export const { addTodo, removeTodo, checkTodo } = todoSlice.actions;

export default todoSlice.reducer;
