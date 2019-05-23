import React, { Fragment } from "react";

import { initialData } from "data";

// components
import { TodoForm, TodoList } from "./components";

// context
import { TodoProvider } from "./context/TodoContext";

// redux
import { reducer as todoFormReducer } from "./redux/TodoForm/reducer";

export function Todo() {
  return (
    <TodoProvider state={initialData} reducer={todoFormReducer}>
      <Fragment>
        <TodoForm />
        <TodoList />
      </Fragment>
    </TodoProvider>
  );
}
