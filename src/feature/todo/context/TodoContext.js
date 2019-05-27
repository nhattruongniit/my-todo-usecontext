import React, { useContext, createContext, useReducer } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ state, reducer, children }) => {
  const [todoState, todoDispatcher] = useReducer(reducer, state);

  return (
    <TodoContext.Provider
      value={{ state: todoState, dispatcher: todoDispatcher }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useStateTodo = () => useContext(TodoContext);
