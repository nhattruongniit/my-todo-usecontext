import React from "react";

// components
import { TodoForm, TodoList } from "./components";

import connect from '../../Context/connect';

const TodoContainer = ({ stateApp, stateTodo, saveTodo }) => {
  console.log("=================state of App============", stateApp);
  console.log("=================state of Todo============", stateTodo);

  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

const mapStateToProps = store => ({
  stateApp: store.app,
  stateTodo: store.todos
});

const mapDispathToProps = dispatch => ({
});

export const Todo = connect(
  mapStateToProps,
  mapDispathToProps
)(TodoContainer);