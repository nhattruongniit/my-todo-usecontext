import React from "react";

// material
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

// contexts
import { useStateTodo } from "../context/todoContext";
import { TODO_COMPLETED, TODO_DELETED } from "../reducer/todoReducer";

export const TodoList = () => {
  const {
    state: {
      todo: { data }
    },
    dispatcher
  } = useStateTodo();

  const handleCompleteTodo = index => () => {
    const newTodo = [...data];
    newTodo[index].completed = !newTodo[index].completed;
    dispatcher({
      type: TODO_COMPLETED,
      payload: newTodo
    });
  };

  const handleDeleteTodo = index => () => {
    const newTodo = data.filter((_, i) => i !== index);
    dispatcher({
      type: TODO_DELETED,
      payload: newTodo
    });
  };

  return data.map((item, index) => {
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
