import React, { useContext, createContext, useReducer } from "react";

import { initialData } from "../../../data";

// reducer
import { reducer } from "../reducer/todoReducer";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoState, todoDispatcher] = useReducer(reducer, initialData);

  return (
    <TodoContext.Provider
      value={{ state: todoState, dispatcher: todoDispatcher }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useStateTodo = () => useContext(TodoContext);
