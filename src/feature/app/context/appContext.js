import React, { createContext, useReducer, useContext } from "react";

import { initialData } from "../../../data";

// reducer
import { reducer } from "../reducer/appReducer";

const AppContext = createContext(initialData);

export const AppProvider = ({ children }) => {
  const [state, dispatcher] = useReducer(reducer, initialData);

  return (
    <AppContext.Provider value={{ state, dispatcher }}>
      {children}
    </AppContext.Provider>
  );
};

export const useStateApp = () => useContext(AppContext);
