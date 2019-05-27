import React from "react";

import { initialData } from "../../data";

// components
import { Todo } from "../../feature";

// context
import { AppProvider } from "./context/appContext";
import { TodoProvider } from "../todo/context/todoContext";
import { reducer as todoReducer } from "../todo/reducer/todoReducer";

export function App() {
  return (
    <div className="App">
      <AppProvider>
        <TodoProvider state={initialData} reducer={todoReducer}>
          <h1>Build Todo Apps with React Hook and Context API</h1>
          <Todo />
        </TodoProvider>
      </AppProvider>
    </div>
  );
}
