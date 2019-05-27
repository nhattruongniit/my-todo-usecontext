import React, { Fragment } from "react";

import { initialData } from "../../data";

// components
import { TodoForm, TodoList } from "./components";

// context
import { TodoProvider } from "./context/TodoContext";

// redux
import { reducer as todoReducer } from "./redux/reducer";

export function Todo() {
  return (
    <TodoProvider state={initialData} reducer={todoReducer}>
      <Fragment>
        <TodoForm />
        <TodoList />
      </Fragment>
    </TodoProvider>
  );
}
