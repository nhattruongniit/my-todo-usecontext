import React from "react";

// material
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

// contexts
import { useStateTodo } from "../context/TodoContext";
import { TODO_COMPLETED, TODO_DELETED } from "../redux/constant";

export const TodoList = () => {
  const {
    state: { todo },
    dispatcher
  } = useStateTodo();

  const handleCompleteTodo = id => {
    const newTodo = [...todo];
    newTodo[id].completed = !newTodo[id].completed;
    dispatcher({
      type: TODO_COMPLETED,
      payload: newTodo
    });
  };

  const handleDeleteTodo = id => {
    const newTodo = todo.filter((_, index) => index !== id);
    dispatcher({
      type: TODO_DELETED,
      payload: newTodo
    });
  };

  return todo.map((item, index) => {
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
            onClick={() => handleCompleteTodo(index)}
          >
            {completed ? "Completed" : "Complete"}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDeleteTodo(index)}
          >
            Delete
          </Button>
        </div>
      </ListItem>
    );
  });
};
