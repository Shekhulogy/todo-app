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

      localStorage.setItem("myTodos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("myTodos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      // const selectedTodos = state.todos.filter(
      //   (todo) => todo.id === action.payload
      // );

      // console.log(state.todos[0]);
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          if (todo.isCheck === false) {
            return { ...todo, isCheck: true };
          } else {
            return { ...todo, isCheck: false };
          }
        } else {
          return todo;
        }
        console.log(state.todos);
      });
      localStorage.setItem("myTodos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
