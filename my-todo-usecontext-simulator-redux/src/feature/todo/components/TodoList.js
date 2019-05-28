import React from "react";

// material
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

import { todoAction } from "../reducer/todoReducer";

import connect from '../../../Context/connect';

const List = ({ stateTodo, deleteTodo, completeTodo }) => {
  const handleCompleteTodo = index => () => {
    const newTodo = [...stateTodo.todo.data];
    newTodo[index].completed = !newTodo[index].completed;
    completeTodo(newTodo);
  };

  const handleDeleteTodo = index => () => {
    const newTodo = stateTodo.todo.data.filter((_, i) => i !== index);
    deleteTodo(newTodo);
  };

  return stateTodo.todo.data.map((item, index) => {
    const { title, completed } = item;

    return (
      <ListItem key={index} dense button>
        <ListItemText
          primary={title}
          style={{ textDecoration: completed ? "line-through" : "" }}
        />
        <div className="buttonMaterial">
          <Button
            variant="contained"
            color="primary"
            className={`btn btn-${completed ? "completed" : "complete"}`}
            onClick={handleCompleteTodo(index)}
          >
            {completed ? "Completed" : "Complete"}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDeleteTodo(index)}
          >
            Delete
          </Button>
        </div>
      </ListItem>
    );
  });
};

const mapStateToProps = store => ({
  stateTodo: store.todos
});

const mapDispathToProps = dispatch => ({
  deleteTodo: param => dispatch(todoAction.deleteTodo(param)),
  completeTodo: param => dispatch(todoAction.completeTodo(param)),
});

export const TodoList = connect(
  mapStateToProps,
  mapDispathToProps
)(List);