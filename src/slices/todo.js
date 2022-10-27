import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  preTodoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNew: (state, action) => {
      let newTodoList = state.preTodoList;
      newTodoList.push({ ...action.payload });
      state.todoList = newTodoList;

      state.preTodoList = newTodoList;
    },

    changeTodo: (state, action) => {
      state.todoList.forEach((item) => {
        if (item.action === action.payload.action) {
          item.done = !item.done;
        }
      });

      state.preTodoList = state.todoList;
      console.log(current(state.preTodoList));
    },

    setPreTodoList: (state, action) => {
      state.preTodoList = action.payload;
    },

    filterTodo: (state, action) => {
      let newTodoList = [];
      switch (action.payload) {
        case "all":
          newTodoList = state.preTodoList;
          break;

        case "active":
          let newListActive = state.preTodoList.filter((item) => {
            return !item.done;
          });

          newTodoList = newListActive;
          break;

        case "complete":
          let newListComplete = state.preTodoList.filter((item) => {
            return item.done;
          });

          newTodoList = newListComplete;
          break;

        default:
          break;
      }

      state.todoList = newTodoList;
    },
  },
});

export default todoSlice.reducer;
export const { addNew, changeTodo, filterTodo } = todoSlice.actions;
