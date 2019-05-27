import React from "react";

// components
import { Todo } from "../../feature";

// context
import { AppProvider } from "./context/appContext";
import { TodoProvider } from "../todo/context/todoContext";

export function App() {
  return (
    <div className="App">
      <AppProvider>
        <TodoProvider>
          <h1>Build Todo Apps with React Hook and Context API</h1>
          <Todo />
        </TodoProvider>
      </AppProvider>
    </div>
  );
}
