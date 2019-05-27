import React, { useContext, createContext, useReducer } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ state, reducer, children }) => (
  <TodoContext.Provider value={useReducer(reducer, state)}>
    {children}
  </TodoContext.Provider>
);

export const useStateTodo = () => useContext(TodoContext);
