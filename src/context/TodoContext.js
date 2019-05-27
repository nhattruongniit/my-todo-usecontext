import React, { useContext, createContext, useReducer } from "react";

const initialState = {
  app: {},
  todo: {
    data: []
  },
  profile: {}
};

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
  return (
    <TodoContext.Provider value={initialState}>{children}</TodoContext.Provider>
  );
};

export const useStateTodo = () => useContext(TodoContext);
