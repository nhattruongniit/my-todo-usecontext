import React from "react";

// components
import { TodoForm, TodoList } from "./components";

// context
import { useStateTodo } from "./context/todoContext";
import { useStateApp } from "../app/context/appContext";
import { SAVE_TODO } from "../app/reducer/appReducer";

export function Todo() {
  const { state, dispatcher: dispatcherApp } = useStateApp();
  const { state: stateTodo } = useStateTodo();

  console.log("=================state of App============", state);
  const handleSaveTodoList = () => {
    dispatcherApp({
      type: SAVE_TODO,
      payload: stateTodo.todo.data
    });
  };

  return (
    <>
      <TodoForm />
      <TodoList />
      <br />
      <button type="button" onClick={handleSaveTodoList}>
        Save Todo List in state Apps
      </button>
    </>
  );
}
